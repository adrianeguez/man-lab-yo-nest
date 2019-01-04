var Generator = require('yeoman-generator');

const TEMPLATES = {
    POLITICAS: 'auth0.politicas.ts',
    CONFIG: 'config.ts',
    CONTROLADOR: 'controller.ts',
    CREATE: 'create.politicas.ts',
    FIND_ALL: 'find-all.politicas.ts',
    FIND_ONE: 'find-one.politicas.ts',
    GITIGNORE: 'gitignore',
    MENSAJES: 'mensajes-auth0.ts',
    MODULO: 'module.ts',
    SERVICIO: 'service.ts',
    UPDATE_ACCOUNT: 'update-account.politicas.ts',
    UPDATE_FIRST: 'update-first-time.auth0.politicas.ts',
};


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {
    }

    prompting() {
    }

    configuring() {
    }

    default() {

    }

    writing() {

        const templatePoliticas = this.templatePath(TEMPLATES.POLITICAS);
        const destinoPoliticas = this.destinationPath(`auth0-politicas/auth0.politicas.ts`);
        this.fs.copyTpl(
            templatePoliticas,
            destinoPoliticas
        );

        const templateConfig = this.templatePath(TEMPLATES.CONFIG);
        const destinoConfig = this.destinationPath(`config.ts`);
        this.fs.copyTpl(
            templateConfig,
            destinoConfig
        );
        const templateControlador = this.templatePath(TEMPLATES.CONTROLADOR);
        const destinoControlador = this.destinationPath(`auth0.controller.ts`);
        this.fs.copyTpl(
            templateControlador,
            destinoControlador
        );

        const templateCreate = this.templatePath(TEMPLATES.CREATE);
        const destinoCreate = this.destinationPath(`auth0-politicas/create.politicas.ts`);
        this.fs.copyTpl(
            templateCreate,
            destinoCreate
        );

        const templateFindAll = this.templatePath(TEMPLATES.FIND_ALL);
        const destinoFindAll = this.destinationPath(`auth0-politicas/find-all.politicas.ts`);
        this.fs.copyTpl(
            templateFindAll,
            destinoFindAll
        );


        const templateFindOne = this.templatePath(TEMPLATES.FIND_ONE);
        const destinoFindOne = this.destinationPath(`auth0-politicas/find-one.politicas.ts`);
        this.fs.copyTpl(
            templateFindOne,
            destinoFindOne
        );

        const templateGitIgnore = this.templatePath(TEMPLATES.GITIGNORE);
        const destinoGitIgnore = this.destinationPath(`.gitignore`);
        this.fs.copyTpl(
            templateGitIgnore,
            destinoGitIgnore
        );


        const templateMensajes = this.templatePath(TEMPLATES.MENSAJES);
        const destinoMensajes = this.destinationPath(`auth0-mensajes/mensajes-auth0.ts`);
        this.fs.copyTpl(
            templateMensajes,
            destinoMensajes
        );

        const templateModule = this.templatePath(TEMPLATES.MODULO);
        const destinoModule = this.destinationPath(`auth0.module.ts`);
        this.fs.copyTpl(
            templateModule,
            destinoModule
        );

        const templateServicio = this.templatePath(TEMPLATES.SERVICIO);
        const destinoServicio = this.destinationPath(`auth0.service.ts`);
        this.fs.copyTpl(
            templateServicio,
            destinoServicio
        );

        const templateUpdateAccount = this.templatePath(TEMPLATES.UPDATE_ACCOUNT);
        const destinoUpdateAccount = this.destinationPath(`auth0-politicas/update-account.politicas.ts`);
        this.fs.copyTpl(
            templateUpdateAccount,
            destinoUpdateAccount
        );

        const templateUpdateFirst = this.templatePath(TEMPLATES.UPDATE_FIRST);
        const destinoUpdateFirst = this.destinationPath(`auth0-politicas/update-first-time.auth0.politicas.ts`);
        this.fs.copyTpl(
            templateUpdateFirst,
            destinoUpdateFirst
        );

    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        this.log(`Modulo Auth0 creado :)`)
    }

};

