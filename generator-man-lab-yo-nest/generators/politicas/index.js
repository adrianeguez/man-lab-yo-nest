var Generator = require('yeoman-generator');

const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre del archivo de mensajes EJ: EmpresaYEcuatoriana'
        }
    }
}
const TEMPLATES = {
    INDEX: 'index.politicas.ts',
    CREATE_ONE: 'create-one.politicas.ts',
    DELETE_ONE: 'delete-one.politicas.ts',
    FIND_ALL: 'find-all.politicas.ts',
    FIND_ONE: 'find-one.politicas.ts',
    UPDATE_ONE: 'update-one.politicas.ts',
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
        const nombrePolitica = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombrePoliticaMinuscula = camelToDash(nombrePolitica);
        const templateIndex = this.templatePath(TEMPLATES.INDEX);
        const destinoIndex = this.destinationPath(`${nombrePoliticaMinuscula}-politicas/${nombrePoliticaMinuscula}.politicas.ts`);

        const templateFindAll = this.templatePath(TEMPLATES.FIND_ALL);
        const destinoFindAll = this.destinationPath(`${nombrePoliticaMinuscula}-politicas/find-all.politicas.ts`);

        const templateFindOne = this.templatePath(TEMPLATES.FIND_ONE);
        const destinoFindOne = this.destinationPath(`${nombrePoliticaMinuscula}-politicas/find-one.politicas.ts`);

        const templateCreateOne = this.templatePath(TEMPLATES.CREATE_ONE);
        const destinoCreateOne = this.destinationPath(`${nombrePoliticaMinuscula}-politicas/create-one.politicas.ts`);

        const templateUpdateOne = this.templatePath(TEMPLATES.UPDATE_ONE);
        const destinoUpdateOne = this.destinationPath(`${nombrePoliticaMinuscula}-politicas/update-one.politicas.ts`);

        const templateDeleteOne = this.templatePath(TEMPLATES.DELETE_ONE);
        const destinoDeleteOne = this.destinationPath(`${nombrePoliticaMinuscula}-politicas/delete-one.politicas.ts`);

        const variables = {
            nombrePolitica,
            nombrePoliticaMinuscula
        };


        this.fs.copyTpl(
            templateIndex,
            destinoIndex,
            variables
        );

        this.fs.copyTpl(
            templateFindAll,
            destinoFindAll
        );

        this.fs.copyTpl(
            templateFindOne,
            destinoFindOne
        );

        this.fs.copyTpl(
            templateCreateOne,
            destinoCreateOne,
            variables
        );

        this.fs.copyTpl(
            templateUpdateOne,
            destinoUpdateOne
        );

        this.fs.copyTpl(
            templateDeleteOne,
            destinoDeleteOne
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
        this.log(`Mensajes ${nombreServicio} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

