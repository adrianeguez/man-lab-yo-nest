import { Get, Controller, Res, Req } from '@nestjs/common';
import { CONFIG_ENVIRONMENT } from './environment/config';
import { init } from './environment/init';

init();

@Controller()
export class AppController {

    @Get('')
    root(@Res() response) {
        console.log('EN vacio ', CONFIG_ENVIRONMENT.urls.frontEndUrl());
        response.render('inicio', {
            frontEndUrl: CONFIG_ENVIRONMENT.urls.frontEndUrl(),
        });
    }

    @Get('callback')
    callback(@Req() request, @Res() response) {
        console.log('En callback ', CONFIG_ENVIRONMENT.urls.frontEndUrl());
        response.redirect(CONFIG_ENVIRONMENT.urls.frontEndSegmento());
    }

    @Get('login')
    login(@Req() request, @Res() response) {
        console.log('En login');
        return 'ok';
    }

    @Get('front-app')
    user(@Req() request, @Res() response) {
        console.log('En front-app');
        response.render('user', {
            user: request.session.passport.user,
        });
    }

    @Get('front-dev')
    userDev(@Req() request, @Res() response) {
        console.log('En front-dev');
        response.render('user-dev', {
            user: request.session.passport.user,
        });
    }

    @Get('logout')
    logout(@Req() request, @Res() response) {
        console.log('En logout');
        request.logout();
        request.session.destroy();
        response.redirect(
            `https://${CONFIG_ENVIRONMENT.auth0.CUENTA}.auth0.com/v2/logout?returnTo=${CONFIG_ENVIRONMENT.logoutUrl}`,
        );
    }
}
