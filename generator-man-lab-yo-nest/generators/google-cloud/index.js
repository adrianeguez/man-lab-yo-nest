var Generator = require('yeoman-generator');

const TEMPLATES = {
    README: 'README.md',
    API_JSON: 'google-cloud-api-key.json',
    MENSAJES: 'mensajes-google-cloud.ts',
    MODULO: 'google-cloud.module.ts',
    SERVICIO: 'google-cloud.service.ts'
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

        const templateReadme = this.templatePath(TEMPLATES.README);
        const destinoReadme = this.destinationPath(`README.md`);
        this.fs.copyTpl(
            templateReadme,
            destinoReadme
        );

        const templateApiJson = this.templatePath(TEMPLATES.API_JSON);
        const destinoApiJson = this.destinationPath(`google-cloud-api-key.json`);
        this.fs.copyTpl(
            templateApiJson,
            destinoApiJson
        );


        const templateMensajes = this.templatePath(TEMPLATES.MENSAJES);
        const destinoMensajes = this.destinationPath(`google-cloud-mensajes/mensajes-google-cloud.ts`);
        this.fs.copyTpl(
            templateMensajes,
            destinoMensajes
        );

        const templateModule = this.templatePath(TEMPLATES.MODULO);
        const destinoModule = this.destinationPath(`google-cloud.module.ts`);
        this.fs.copyTpl(
            templateModule,
            destinoModule
        );

        const templateServicio = this.templatePath(TEMPLATES.SERVICIO);
        const destinoServicio = this.destinationPath(`google-cloud.service.ts`);
        this.fs.copyTpl(
            templateServicio,
            destinoServicio
        );

    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        this.log(`Modulo Google Cloud creado :)`)
    }

};

