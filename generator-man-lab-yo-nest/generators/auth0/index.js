var Generator = require('yeoman-generator');

const TEMPLATES = {
    SERVICIO: 'service.ts',
    CONTROLADOR: 'controller.ts',
    MODULO: 'module.ts',
    CONFIG: 'config.ts',
    GITIGNORE: 'gitignore'
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
        const templateServicio = this.templatePath(TEMPLATES.SERVICIO);
        const destinoServicio = this.destinationPath(`auth0.service.ts`);
        this.fs.copyTpl(
            templateServicio,
            destinoServicio
        );

        const templateControlador = this.templatePath(TEMPLATES.CONTROLADOR);
        const destinoControlador = this.destinationPath(`auth0.controller.ts`);
        this.fs.copyTpl(
            templateControlador,
            destinoControlador
        );

        const templateModule = this.templatePath(TEMPLATES.MODULO);
        const destinoModule = this.destinationPath(`auth0.module.ts`);
        this.fs.copyTpl(
            templateModule,
            destinoModule
        );

        const templateConfig = this.templatePath(TEMPLATES.CONFIG);
        const destinoConfig = this.destinationPath(`config.ts`);
        this.fs.copyTpl(
            templateConfig,
            destinoConfig
        );

        const templateGitIgnore = this.templatePath(TEMPLATES.GITIGNORE);
        const destinoGitIgnore = this.destinationPath(`.gitignore`);
        this.fs.copyTpl(
            templateGitIgnore,
            destinoGitIgnore
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

