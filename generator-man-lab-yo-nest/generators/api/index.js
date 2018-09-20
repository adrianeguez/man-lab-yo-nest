var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del api EJ: EmpresaYEcuatoriana'
        }
    }
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);

        const nombreApi = [this.options[ARGUMENTOS.NOMBRE.nombre]];

        const opciones = {
            arguments: [nombreApi]
        }

        const directorioDelGeneradorServicio = require.resolve('../service');
        const directorioDelGeneradorController = require.resolve('../controller');
        const directorioDelGeneradorResolver = require.resolve('../resolver');
        const directorioDelGeneradorGateway = require.resolve('../gateway');

        this.composeWith(directorioDelGeneradorServicio, opciones);
        this.composeWith(directorioDelGeneradorController, opciones);
        this.composeWith(directorioDelGeneradorResolver, opciones);
        this.composeWith(directorioDelGeneradorGateway, opciones);
    }

    initializing() {
        // this.log('initializing')
    }

    async prompting() {
        // this.log('prompting')
        /*
                const respuestas = await this.prompt([{
                    type: 'input',
                    name: 'nombreServicio',
                    message: 'Cual es el nombre de tu servicio?',
                }]);
        */
        // this.log('Nombre del servicio', this.option(ARGUMENTOS.NOMBRE.nombre));

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
        const nombreServicio = this.options[ARGUMENTOS.NOMBRE.nombre];
        this.log(`Api ${nombreServicio} creado :)`)
    }

};


