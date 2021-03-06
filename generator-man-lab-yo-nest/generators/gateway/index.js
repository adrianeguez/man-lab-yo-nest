var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del resolver EJ: EmpresaYEcuatoriana'
        }
    }
};
const TEMPLATES = {
    GATEWAY: 'gateway.ts',
    GATEWAYV2: 'gateway-version-2.ts'
};
const OPCIONES = {
    puerto: 'puerto',
    ip: 'ip',
    secreto: 'secreto'
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
        const nombreGateway = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreGatewayMinuscula = camelToDash(nombreGateway);
        const nombreGatewayPrivado = capitalizeFirstLetter(nombreGateway);

        const version1 = this.options.version1;
        let template;
        if (version1) {
            template = this.templatePath(TEMPLATES.GATEWAY);
        } else {
            template = this.templatePath(TEMPLATES.GATEWAYV2);
        }
        const destino = this.destinationPath(`${nombreGatewayMinuscula}.gateway.ts`);
        const ip = this.options[OPCIONES.ip] ? this.options[OPCIONES.ip] : "http://localhost";
        const puerto = this.options[OPCIONES.puerto] ? this.options[OPCIONES.puerto] : "3001";
        const secreto = this.options[OPCIONES.secreto] ? this.options[OPCIONES.isecretop] : "secreto";
        const variables = {
            nombreGateway,
            nombreGatewayMinuscula,
            nombreGatewayPrivado,
            ip,
            puerto,
            secreto
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
        this.log(`Gateway ${nombreServicio} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

