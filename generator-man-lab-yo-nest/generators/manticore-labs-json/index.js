var Generator = require('yeoman-generator');

const TEMPLATES = {
    JSON: '.manticore-labs.json'
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

        const destino = this.destinationPath(`.manticore-labs.json`);
        const template = this.templatePath(TEMPLATES.JSON);
        this.fs.copyTpl(
            template,
            destino,
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
        this.log(`manticore labs json creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

