var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del controlador EJ: EmpresaYEcuatoriana'
        }
    }
};
const TEMPLATES = {
    CONTROLLER: 'controller.ts',
    CONTROLLERV2: 'controller-version-2.ts'
};

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
        this.option('version1');
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
        const nombreController = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreControllerMinuscula = camelToDash(nombreController);
        const nombreControllerPrivado = capitalizeFirstLetter(nombreController);
        const version1 = this.options.version1;
        let template;
        if (version1) {
            template = this.templatePath(TEMPLATES.CONTROLLER);
        } else {
            template = this.templatePath(TEMPLATES.CONTROLLERV2);
        }
        const destino = this.destinationPath(`${nombreControllerMinuscula}.controller.ts`);
        const variables = {
            nombreController,
            nombreControllerMinuscula,
            nombreControllerPrivado
        };

        this.fs.copyTpl(
            template,
            destino,
            variables
        );
    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        const nombreServicio = this.options[ARGUMENTOS.NOMBRE.nombre];
        this.log(`Controlador ${nombreServicio} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

