const Generator = require('yeoman-generator');
const leerJson = require('../../util/leer-manticore-labs-json');

const ARGUMENTOS = {};
const TEMPLATES = {
    ENVIRONMENT: 'environment.ts',
    GITIGNORE: 'gitignore',
    INIT: 'init.ts'
};

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
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
        try {
            const objetoJSON = leerJson(this.destinationPath(`.manticore-labs.json`), 'utf-8');
            const ambientes = Object.keys(objetoJSON.ambientes);
            ambientes
                .forEach(
                    (nombreAmbiente) => {
                        const template = this.templatePath(TEMPLATES.ENVIRONMENT);
                        const destino = this.destinationPath(`src/environment/config-${nombreAmbiente}.ts`);
                        const variables = objetoJSON.ambientes[nombreAmbiente];
                        this.fs.copyTpl(
                            template,
                            destino,
                            variables
                        );
                        if (variables.dev) {
                            const destinoConfig = this.destinationPath(`src/environment/config.ts`);
                            this.fs.copyTpl(
                                template,
                                destinoConfig,
                                variables
                            );
                        }
                    }
                );


            const templateIgnore = this.templatePath(TEMPLATES.GITIGNORE);
            const destinoIgnore = this.destinationPath(`src/environment/.${TEMPLATES.GITIGNORE}`);

            const templateInit = this.templatePath(TEMPLATES.INIT);
            const destinoInit = this.destinationPath(`src/environment/${TEMPLATES.INIT}`);

            this.fs.copyTpl(
                templateIgnore,
                destinoIgnore,
                null
            );

            this.fs.copyTpl(
                templateInit,
                destinoInit,
                null
            );

        } catch (e) {
            console.error({
                error: e,
                mensaje: 'No existe el archivo .manticore-labs.json'
            });
            throw Error('No existe archivo .manticore-labs.json')
        }
    }

    conflicts() {
        // this.log('conflicts ')
    }

    install() {
        // this.log('install')
    }

    end() {
        this.log(`Se crearon los ambientes :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

