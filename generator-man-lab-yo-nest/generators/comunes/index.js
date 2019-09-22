var Generator = require('yeoman-generator');

const ARGUMENTOS = {};
const TEMPLATES = {
    PRINCIPAL_CONTROLLER: 'principal.controller.ts',
    PRINCIPAL_MODULE: 'principal.module.ts',
    APP_CONTROLLER: 'app.controller.ts',
    APP_SERVICE: 'app.service.ts',
    REDIS_IO_ADAPTER: 'redis-io-adapter.ts',
    CLIENTE_WEB_SOCKET_MODULE: 'cliente-web-socket.module.ts',
    CLIENTE_WEB_SOCKET_SERVICE: 'cliente-web-socket.service.ts'
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

    async prompting() {
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

        const templateControllerApp = this.templatePath(TEMPLATES.APP_CONTROLLER);
        const destinoControllerApp = this.destinationPath(`src/${TEMPLATES.APP_CONTROLLER}`);

        this.fs.copyTpl(
            templateControllerApp,
            destinoControllerApp,
            null
        );

        const templateServiceApp = this.templatePath(TEMPLATES.APP_SERVICE);
        const destinoServiceApp = this.destinationPath(`src/${TEMPLATES.APP_SERVICE}`);

        this.fs.copyTpl(
            templateServiceApp,
            destinoServiceApp,
            null
        );

        const templateController = this.templatePath(TEMPLATES.PRINCIPAL_CONTROLLER);
        const destinoController = this.destinationPath(`src/principal/${TEMPLATES.PRINCIPAL_CONTROLLER}`);

        this.fs.copyTpl(
            templateController,
            destinoController,
            null
        );

        const templateModule = this.templatePath(TEMPLATES.PRINCIPAL_MODULE);
        const destinoModule = this.destinationPath(`src/principal/${TEMPLATES.PRINCIPAL_MODULE}`);

        this.fs.copyTpl(
            templateModule,
            destinoModule,
            null
        );

        const templateRedis = this.templatePath(TEMPLATES.REDIS_IO_ADAPTER);
        const destinoRedis = this.destinationPath(`src/redis-io-adapter/${TEMPLATES.REDIS_IO_ADAPTER}`);

        this.fs.copyTpl(
            templateRedis,
            destinoRedis,
            null
        );

        const templateWSModule = this.templatePath(TEMPLATES.CLIENTE_WEB_SOCKET_MODULE);
        const destinoWSModule = this.destinationPath(`src/cliente-web-socket/${TEMPLATES.CLIENTE_WEB_SOCKET_MODULE}`);

        this.fs.copyTpl(
            templateWSModule,
            destinoWSModule,
            null
        );

        const templateWSService = this.templatePath(TEMPLATES.CLIENTE_WEB_SOCKET_SERVICE);
        const destinoWSService = this.destinationPath(`src/cliente-web-socket/${TEMPLATES.CLIENTE_WEB_SOCKET_SERVICE}`);

        this.fs.copyTpl(
            templateWSService,
            destinoWSService,
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
        this.log(`Creaste los controladores y servicios principales creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

