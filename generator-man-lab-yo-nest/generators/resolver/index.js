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
}
const TEMPLATES = {
    RESOLVER: 'resolver.ts',
    RESOLVERV2: 'resolver-version-2.ts',
}

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
        this.option('version2');

        this.option('types');
        const types = this.options.types
        if (types) {
            const nombreApi = [this.options[ARGUMENTOS.NOMBRE.nombre]];
            const opciones = {
                arguments: [nombreApi],
                version2: true,
            }
            const directorioDelGeneradorGraphql = require.resolve('../graphql');
            this.composeWith(directorioDelGeneradorGraphql, opciones);
        }
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
        const nombreResolver = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreResolverMinuscula = camelToDash(nombreResolver);
        const nombreResolverPrivado = capitalizeFirstLetter(nombreResolver);
        const version2 = this.options.version2
        let template
        if (version2) {
            template = this.templatePath(TEMPLATES.RESOLVERV2);
        } else {
            template = this.templatePath(TEMPLATES.RESOLVER);
        }

        const destino = this.destinationPath(`${nombreResolverMinuscula}.resolver.ts`);
        const variables = {
            nombreResolver,
            nombreResolverMinuscula,
            nombreResolverPrivado
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
        this.log(`Resolver ${nombreServicio} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

