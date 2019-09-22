var Generator = require('yeoman-generator');

const ARGUMENTOS = {
};

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        const directorioDelGeneradorEnvironment = require.resolve('../environment');
        const directorioDelGeneradorComunes = require.resolve('../comunes');
        const directorioDelGeneradorCiCd = require.resolve('../ci-cd');
        const directorioDelGeneradorDockerCompose = require.resolve('../docker-compose');

        this.composeWith(directorioDelGeneradorEnvironment, null);
        this.composeWith(directorioDelGeneradorComunes, null);
        this.composeWith(directorioDelGeneradorCiCd, null);
        this.composeWith(directorioDelGeneradorDockerCompose, null);

    }

    initializing() {
        // this.log('initializing')
    }

    async prompting() {

    }
    configuring() {
        // this.log('configuring ')
    }

    default() {
        // this.log('default ')
    }

    method1() {
        // this.log('method 1 just ran');
    }

    method2() {
        // this.log('method 2 just ran');
    }


    writing() {
    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        this.log(`Inicializado proyecto exitosamente :)`)
    }

};


