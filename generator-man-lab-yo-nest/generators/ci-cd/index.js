var Generator = require('yeoman-generator');

const TEMPLATES = {
    CONFIGURACION_IP_PUERTO: 'configuracion-ip-puerto.js',
    COPIAR_CONTENIDO: 'copiar-contenido.js'
};

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


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

    method1() {
    }

    method2() {
    }

    writing() {

        const destinoConfigIpPuerto = this.destinationPath(`ci-cd/${TEMPLATES.CONFIGURACION_IP_PUERTO}`);
        const templateConfigIpPuerto = this.templatePath(TEMPLATES.CONFIGURACION_IP_PUERTO);
        this.fs.copyTpl(
            templateConfigIpPuerto,
            destinoConfigIpPuerto,
            null
        );

        const destinoCopiarContenido = this.destinationPath(`ci-cd/${TEMPLATES.COPIAR_CONTENIDO}`);
        const templateCopiarContenido = this.templatePath(TEMPLATES.COPIAR_CONTENIDO);

        this.fs.copyTpl(
            templateCopiarContenido,
            destinoCopiarContenido,
            null
        );
    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        this.log(`ci cd creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

