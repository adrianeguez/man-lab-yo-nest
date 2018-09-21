var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del Create Dto EJ: EmpresaYEcuatoriana'
        }
    }
}
const TEMPLATES = {
    CREATE_DTO: 'create-dto.ts'
}

const camelToDash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);


module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
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
        const nombreCreateDto = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreCreateDtoMinuscula = camelToDash(nombreCreateDto);
        const nombreCreateDtoPrivado = capitalizeFirstLetter(nombreCreateDto);
        const template = this.templatePath(TEMPLATES.CREATE_DTO);
        const destino = this.destinationPath(`${nombreCreateDtoMinuscula}-create-dto/${nombreCreateDtoMinuscula}-create-dto.ts`);
        const variables = {
            nombreCreateDto,
            nombreCreateDtoMinuscula,
            nombreCreateDtoPrivado
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
        this.log(`Entity ${nombreServicio} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

