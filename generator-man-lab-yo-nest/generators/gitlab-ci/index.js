const Generator = require('yeoman-generator');
const leerJson = require('../../util/leer-manticore-labs-json');

const ARGUMENTOS = {};
const TEMPLATES = {
    GITLAB_CI: '.gitlab-ci.yml'
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
            const destino = this.destinationPath(`../${TEMPLATES.GITLAB_CI}`);
            const template = this.templatePath(TEMPLATES.GITLAB_CI);
            const variables = {
                imagenDockerGitlab: objetoJSON.imagenDockerGitlab,
                copiarSubmodulos: objetoJSON.copiarSubmodulos,
                nombreCarpetaProyecto: objetoJSON.nombreCarpetaProyecto
            };
            this.fs.copyTpl(
                template,
                destino,
                variables
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
        this.log(`Se creo el archivo .gitlab-ci.yml :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

