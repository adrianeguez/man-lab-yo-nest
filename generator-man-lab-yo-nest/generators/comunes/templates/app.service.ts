import {Injectable} from '@nestjs/common';
import {CONFIG_ENVIRONMENT} from './environment/config';
import {init} from './environment/init';
import * as passport from 'passport';
import {
    InternalServerErrorException,
    MiddlewareConsumer
} from '@nestjs/common';

init();

@Injectable()
export class AppService {
    configurarAuth0(consumer: MiddlewareConsumer, authService): MiddlewareConsumer {

        consumer
            .apply(
                passport.authenticate('auth0', {scope: 'openid email profile'}),
                (req, res) => {
                    console.log('EN LOGIN');
                    res.redirect(CONFIG_ENVIRONMENT.urls.segmento);
                },
            )
            .forRoutes('login')
            .apply(
                passport.authenticate('auth0', {
                    failureRedirect: CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                }),
                (req, res) => {
                    console.log('PASSPORT AUTH0');
                    if (!req.user) {
                        throw new InternalServerErrorException({
                            mensaje: 'No existe usuario',
                        });
                    }
                    if (req.session.redirectUrl) {
                        const urlRedirect = req.session.redirectUrl;
                        const url = CONFIG_ENVIRONMENT.urls.url();
                        const urlSinSlashFinal = url.substring(0, url.length - 1);
                        console.log('TIENE REDIRECT');
                        console.log(urlRedirect);
                        console.log(urlSinSlashFinal);
                        console.log(urlSinSlashFinal + urlRedirect);
                        delete req.session.redirectUrl;
                        res.redirect(urlSinSlashFinal + urlRedirect);
                    } else {
                        console.log('NO TIENE REDIRECT');
                        console.log(CONFIG_ENVIRONMENT.urls.frontEndSegmento());
                        res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmento()); // /front-app
                    }
                },
            )
            .forRoutes('callback')
            .apply(
                (req, res, next) => {
                    if (req.session) {
                        const fullUrl = req.originalUrl;
                        req.session.redirectUrl = fullUrl;
                        if (req.session.passport) {
                            if (req.session.passport.user) {
                                if (req.session.passport.user.id) {
                                    if (!req.session.passport.user.username) {
                                        authService
                                            .findOne(req.session.passport.user.id)
                                            .then((usuario: any) => {
                                                req.session.passport.user.username = usuario.username;
                                                req.session.passport.user.email = usuario.email;
                                                req.session.passport.user.email_verified =
                                                    usuario.email_verified;
                                                req.session.passport.user.name = usuario.name;
                                                req.session.passport.user.picture = usuario.picture;
                                                req.session.passport.user.user_metadata = usuario.user_metadata
                                                    ? usuario.user_metadata
                                                    : {roles: []};
                                                next();
                                            })
                                            .catch(e => {
                                                console.error(e);
                                                throw new InternalServerErrorException({
                                                    mensaje:
                                                        'Error cargando datos. Intentalo mas tarde',
                                                });
                                            });
                                    } else {
                                        console.log('EN SIGUIENTE POLITICA');
                                        next();
                                    }
                                } else {
                                    console.log(
                                        'EN CALLBACK ',
                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                    );
                                    res.redirect(
                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                    );
                                }
                            } else {
                                console.log(
                                    'EN CALLBACK ',
                                    CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                );
                                res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin());
                            }
                        } else {
                            console.log(
                                'EN CALLBACK ',
                                CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                            );
                            res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin());
                        }
                    } else {
                        console.log(
                            'EN CALLBACK ',
                            CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                        );
                        res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin());
                    }
                },
                (req, res) => {
                    console.log('EN CALLBACK RENDERIZANDO USER');
                    res.render('user', {
                        user: req.session.passport.user,
                    });
                },
            )
            .forRoutes('front-app')
            .apply(
                (req, res, next) => {
                    if (req.session) {
                        const fullUrl = req.originalUrl;
                        req.session.redirectUrl = fullUrl;
                        if (req.session.passport) {
                            if (req.session.passport.user) {
                                if (req.session.passport.user.id) {
                                    if (!req.session.passport.user.username) {
                                        authService
                                            .findOne(req.session.passport.user.id)
                                            .then((usuario: any) => {
                                                req.session.passport.user.username = usuario.username;
                                                req.session.passport.user.email = usuario.email;
                                                req.session.passport.user.email_verified =
                                                    usuario.email_verified;
                                                req.session.passport.user.name = usuario.name;
                                                req.session.passport.user.picture = usuario.picture;
                                                req.session.passport.user.user_metadata = usuario.user_metadata
                                                    ? usuario.user_metadata
                                                    : {roles: []};
                                                next();
                                            })
                                            .catch(e => {
                                                console.error(e);
                                                throw new InternalServerErrorException({
                                                    mensaje:
                                                        'Error cargando datos. Intentalo mas tarde',
                                                });
                                            });
                                    } else {
                                        console.log('EN SIGUIENTE POLITICA DEV');
                                        next();
                                    }
                                } else {
                                    console.log(
                                        'EN CALLBACK DEV ',
                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                    );
                                    res.redirect(
                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                    );
                                }
                            } else {
                                console.log(
                                    'EN CALLBACK DEV ',
                                    CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                );
                                res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin());
                            }
                        } else {
                            console.log(
                                'EN CALLBACK DEV ',
                                CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                            );
                            res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin());
                        }
                    } else {
                        console.log(
                            'EN CALLBACK DEV ',
                            CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                        );
                        res.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin());
                    }
                },
                (req, res) => {
                    console.log('EN CALLBACK RENDERIZANDO USER-DEV');
                    res.render('user-dev', {
                        user: req.session.passport.user,
                        // tslint:disable-next-line: no-shadowed-variable
                        configure(consumer: MiddlewareConsumer) {
                            if (CONFIG_ENVIRONMENT.seguridad) {
                                consumer
                                    .apply(
                                        passport.authenticate('auth0', {
                                            scope: 'openid email profile',
                                        }),
                                        // tslint:disable-next-line: no-shadowed-variable
                                        (req, res) => {
                                            console.log('EN LOGIN');
                                            res.redirect(CONFIG_ENVIRONMENT.urls.segmento);
                                        },
                                    )
                                    .forRoutes('login')
                                    .apply(
                                        passport.authenticate('auth0', {
                                            failureRedirect: CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                        }),
                                        // tslint:disable-next-line: no-shadowed-variable
                                        (req, res) => {
                                            console.log('PASSPORT AUTH0');
                                            if (!req.user) {
                                                throw new InternalServerErrorException({
                                                    mensaje: 'No existe usuario',
                                                });
                                            }
                                            if (req.session.redirectUrl) {
                                                const urlRedirect = req.session.redirectUrl;
                                                const url = CONFIG_ENVIRONMENT.urls.url();
                                                const urlSinSlashFinal = url.substring(
                                                    0,
                                                    url.length - 1,
                                                );
                                                console.log('TIENE REDIRECT');
                                                console.log(urlRedirect);
                                                console.log(urlSinSlashFinal);
                                                console.log(urlSinSlashFinal + urlRedirect);
                                                delete req.session.redirectUrl;
                                                res.redirect(urlSinSlashFinal + urlRedirect);
                                            } else {
                                                console.log('NO TIENE REDIRECT');
                                                console.log(
                                                    CONFIG_ENVIRONMENT.urls.frontEndSegmento(),
                                                );
                                                res.redirect(
                                                    CONFIG_ENVIRONMENT.urls.frontEndSegmento(),
                                                ); // /front-app
                                            }
                                        },
                                    )
                                    .forRoutes('callback')
                                    .apply(
                                        // tslint:disable-next-line: no-shadowed-variable
                                        (req, res, next) => {
                                            if (req.session) {
                                                const fullUrl = req.originalUrl;
                                                req.session.redirectUrl = fullUrl;
                                                if (req.session.passport) {
                                                    if (req.session.passport.user) {
                                                        if (req.session.passport.user.id) {
                                                            if (!req.session.passport.user.username) {
                                                                authService
                                                                    .findOne(req.session.passport.user.id)
                                                                    .then((usuario: any) => {
                                                                        req.session.passport.user.username =
                                                                            usuario.username;
                                                                        req.session.passport.user.email =
                                                                            usuario.email;
                                                                        req.session.passport.user.email_verified =
                                                                            usuario.email_verified;
                                                                        req.session.passport.user.name =
                                                                            usuario.name;
                                                                        req.session.passport.user.picture =
                                                                            usuario.picture;
                                                                        req.session.passport.user.user_metadata = usuario.user_metadata
                                                                            ? usuario.user_metadata
                                                                            : {roles: []};
                                                                        next();
                                                                    })
                                                                    .catch(e => {
                                                                        console.error(e);
                                                                        throw new InternalServerErrorException({
                                                                            mensaje:
                                                                                'Error cargando datos. Intentalo mas tarde',
                                                                        });
                                                                    });
                                                            } else {
                                                                console.log('EN SIGUIENTE POLITICA');
                                                                next();
                                                            }
                                                        } else {
                                                            console.log(
                                                                'EN CALLBACK ',
                                                                CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                            );
                                                            res.redirect(
                                                                CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                            );
                                                        }
                                                    } else {
                                                        console.log(
                                                            'EN CALLBACK ',
                                                            CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                        );
                                                        res.redirect(
                                                            CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                        );
                                                    }
                                                } else {
                                                    console.log(
                                                        'EN CALLBACK ',
                                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                    );
                                                    res.redirect(
                                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                    );
                                                }
                                            } else {
                                                console.log(
                                                    'EN CALLBACK ',
                                                    CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                );
                                                res.redirect(
                                                    CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                );
                                            }
                                        },
                                        // tslint:disable-next-line: no-shadowed-variable
                                        (req, res) => {
                                            console.log('EN CALLBACK RENDERIZANDO USER');
                                            res.render('user', {
                                                user: req.session.passport.user,
                                            });
                                        },
                                    )
                                    .forRoutes('front-app')
                                    .apply(
                                        // tslint:disable-next-line: no-shadowed-variable
                                        (req, res, next) => {
                                            if (req.session) {
                                                const fullUrl = req.originalUrl;
                                                req.session.redirectUrl = fullUrl;
                                                if (req.session.passport) {
                                                    if (req.session.passport.user) {
                                                        if (req.session.passport.user.id) {
                                                            if (!req.session.passport.user.username) {
                                                                authService
                                                                    .findOne(req.session.passport.user.id)
                                                                    .then((usuario: any) => {
                                                                        req.session.passport.user.username =
                                                                            usuario.username;
                                                                        req.session.passport.user.email =
                                                                            usuario.email;
                                                                        req.session.passport.user.email_verified =
                                                                            usuario.email_verified;
                                                                        req.session.passport.user.name =
                                                                            usuario.name;
                                                                        req.session.passport.user.picture =
                                                                            usuario.picture;
                                                                        req.session.passport.user.user_metadata = usuario.user_metadata
                                                                            ? usuario.user_metadata
                                                                            : {roles: []};
                                                                        next();
                                                                    })
                                                                    .catch(e => {
                                                                        console.error(e);
                                                                        throw new InternalServerErrorException({
                                                                            mensaje:
                                                                                'Error cargando datos. Intentalo mas tarde',
                                                                        });
                                                                    });
                                                            } else {
                                                                console.log('EN SIGUIENTE POLITICA DEV');
                                                                next();
                                                            }
                                                        } else {
                                                            console.log(
                                                                'EN CALLBACK DEV ',
                                                                CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                            );
                                                            res.redirect(
                                                                CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                            );
                                                        }
                                                    } else {
                                                        console.log(
                                                            'EN CALLBACK DEV ',
                                                            CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                        );
                                                        res.redirect(
                                                            CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                        );
                                                    }
                                                } else {
                                                    console.log(
                                                        'EN CALLBACK DEV ',
                                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                    );
                                                    res.redirect(
                                                        CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                    );
                                                }
                                            } else {
                                                console.log(
                                                    'EN CALLBACK DEV ',
                                                    CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                );
                                                res.redirect(
                                                    CONFIG_ENVIRONMENT.urls.frontEndSegmentoLogin(),
                                                );
                                            }
                                        },
                                        // tslint:disable-next-line: no-shadowed-variable
                                        (req, res) => {
                                            console.log('EN CALLBACK RENDERIZANDO USER-DEV');
                                            res.render('user-dev', {
                                                user: req.session.passport.user,
                                            });
                                        },
                                    )
                                    .forRoutes('front-dev');
                            }
                        },
                    });
                },
            );
        return consumer;
    }

}


