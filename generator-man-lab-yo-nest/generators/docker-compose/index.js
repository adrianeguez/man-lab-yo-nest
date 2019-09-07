const Generator = require('yeoman-generator');
const leerJson = require('../../util/leer-manticore-labs-json');

const ARGUMENTOS = {};
const TEMPLATES = {
    DOCKER_COMPOSE: 'docker-compose.yml'
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
        try {
            const objetoJSON = leerJson(this.destinationPath(`.manticore-labs.json`), 'utf-8');
            const ambientes = Object.keys(objetoJSON.ambientes);
            ambientes
                .forEach(
                    (nombreAmbiente) => {
                        const variables = objetoJSON.ambientes[nombreAmbiente];
                        if (variables.dev) {
                            const destino = this.destinationPath(`${TEMPLATES.DOCKER_COMPOSE}`);
                            const template = this.templatePath(TEMPLATES.DOCKER_COMPOSE);

                            this.fs.copyTpl(
                                template,
                                destino,
                                {
                                    ...variables,
                                    nombreAplicativo: objetoJSON.nombreAplicativo
                                }
                            );
                        }
                    }
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
        this.log(`Se creo el archivo docker-compose :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

