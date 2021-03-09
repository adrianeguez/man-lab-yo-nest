var Generator = require('yeoman-generator');

// nombreMayuscula
// nombreCamel
// nombreGuines
// nombreSoloMayusculas
// nombreEspacioMayuscula
// id
// nombreHabilitado
// nombreCreatedAt
// nombreUpdatedAt


const ARGUMENTOS = {
    NOMBRE: {
        nombre: 'nombre',
        configuracion: {
            type: String,
            required: true,
            desc: 'Nombre de la entidad EJ: EmpresaYEcuatoriana'
        }
    },
    ID: {
        nombre: 'id',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre del Identificador de la tabla. Por defecto es "id". EJ: idEmpresaEcuatoriana'
        }
    },
    HABILITADO: {
        nombre: 'habilitado',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre del campo habilitado. por defecto es "habilitado". EJ: empresaHabilitado'
        }
    },
    NOMBRE_CREATED_AT: {
        nombre: 'nombreCreatedAt',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre del campo CreatedAt EJ: EmpresaYEcuatoriana'
        }
    },
    NOMBRE_UPDATED_AT: {
        nombre: 'nombreUpdatedAt',
        configuracion: {
            type: String,
            required: false,
            desc: 'Nombre del campo UpdateddAt EJ: EmpresaYEcuatoriana'
        }
    },
};
const TEMPLATES = {
    CONTROLLER: '.controller.ts',
    DATOS_PRUEBA: '.datos-prueba.ts',
    ENTITY: '.entity.ts',
    MODULE: '.module.ts',
    OCC: '.occ.ts',
    SERVICE: '.service.ts',
    ACTUALIZAR_DTO: '-actualizar.dto.ts',
    BUSQUEDA_DTO: '-busqueda.dto.ts',
    CREAR_DTO: '-crear.dto.ts',
    HABILITADO_DTO: '-habilitado.dto.ts',
    IMPORTS: '-imports.ts',
    PERMISOS: '-permisos.ts',
    PROVIDERS: '-providers.ts',
};

const aCamel = (cadena) => {
    return cadena.charAt(0).toLowerCase() + cadena.slice(1);
}

const camelADash = str => str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
const aTodoMayuscula = (cadena) => {
    let arreglo = [];
    cadena.split("")
        .forEach(
            (letra, indice) => {
                if (indice > 0) {
                    if (letra === letra.toUpperCase()) {
                        arreglo.push('_');
                        arreglo.push(letra.toUpperCase());
                    } else {
                        arreglo.push(letra.toUpperCase());
                    }
                } else {
                    arreglo.push(letra.toUpperCase());
                }
            }
        );
    return arreglo.join("");
}

const aNombreEspacioMayuscula = (cadena) => {
    let arreglo = [];
    cadena.split("")
        .forEach(
            (letra, indice) => {
                if (indice > 0) {
                    if (letra === letra.toUpperCase()) {
                        arreglo.push(' ');
                        arreglo.push(letra);
                    } else {
                        arreglo.push(letra);
                    }
                } else {
                    arreglo.push(letra);
                }
            }
        );
    return arreglo.join("");
}
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // argumentos
        this.argument(ARGUMENTOS.NOMBRE.nombre, ARGUMENTOS.NOMBRE.configuracion);
        this.argument(ARGUMENTOS.ID.nombre, ARGUMENTOS.ID.configuracion);
        this.argument(ARGUMENTOS.HABILITADO.nombre, ARGUMENTOS.HABILITADO.configuracion);
        this.argument(ARGUMENTOS.NOMBRE_CREATED_AT.nombre, ARGUMENTOS.NOMBRE_CREATED_AT.configuracion);
        this.argument(ARGUMENTOS.NOMBRE_UPDATED_AT.nombre, ARGUMENTOS.NOMBRE_UPDATED_AT.configuracion);

        // opciones

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
        const nombreMayuscula = this.options[ARGUMENTOS.NOMBRE.nombre];
        const nombreCamel = aCamel(nombreMayuscula);
        const nombreGuiones = camelADash(nombreCamel);
        const nombreSoloMayusculas = aTodoMayuscula(nombreMayuscula);
        const nombreEspacioMayuscula = aNombreEspacioMayuscula(nombreMayuscula);
        let id = this.options[ARGUMENTOS.ID.nombre];
        let nombreHabilitado = this.options[ARGUMENTOS.HABILITADO.nombre];
        let nombreCreatedAt = this.options[ARGUMENTOS.NOMBRE_CREATED_AT.nombre];
        let nombreUpdatedAt = this.options[ARGUMENTOS.NOMBRE_UPDATED_AT.nombre];
        if (!id) {
            id = 'id';
        }
        if (!nombreHabilitado) {
            nombreHabilitado = 'sisHabilitado';
        }
        if (!nombreCreatedAt) {
            nombreCreatedAt = 'sisCreado';
        }
        if (!nombreUpdatedAt) {
            nombreUpdatedAt = 'sisModificado';
        }
        const variables = {
            nombreMayuscula,
            nombreCamel,
            nombreGuiones,
            nombreSoloMayusculas,
            nombreEspacioMayuscula,
            id,
            nombreHabilitado,
            nombreCreatedAt,
            nombreUpdatedAt
        };

        const templateC = this.templatePath(TEMPLATES.CONTROLLER);
        const destinoC = this.destinationPath(`${nombreGuiones}.controller.ts`);

        this.fs.copyTpl(
            templateC,
            destinoC,
            variables
        );

        const templateDP = this.templatePath(TEMPLATES.DATOS_PRUEBA);
        const destinoDP = this.destinationPath(`./constantes/${nombreGuiones}.datos-prueba.ts`);

        this.fs.copyTpl(
            templateDP,
            destinoDP,
            variables
        );

        const templateE = this.templatePath(TEMPLATES.ENTITY);
        const destinoE = this.destinationPath(`${nombreGuiones}.entity.ts`);

        this.fs.copyTpl(
            templateE,
            destinoE,
            variables
        );

        const templateM = this.templatePath(TEMPLATES.MODULE);
        const destinoM = this.destinationPath(`${nombreGuiones}.module.ts`);

        this.fs.copyTpl(
            templateM,
            destinoM,
            variables
        );

        const templateOCC = this.templatePath(TEMPLATES.OCC);
        const destinoOCC = this.destinationPath(`./constantes/${nombreGuiones}.occ.ts`);

        this.fs.copyTpl(
            templateOCC,
            destinoOCC,
            variables
        );

        const templateS = this.templatePath(TEMPLATES.SERVICE);
        const destinoOS = this.destinationPath(`${nombreGuiones}.service.ts`);

        this.fs.copyTpl(
            templateS,
            destinoOS,
            variables
        );

        const templateADTO = this.templatePath(TEMPLATES.ACTUALIZAR_DTO);
        const destinoADTO = this.destinationPath(`./dto/${nombreGuiones}.actualizar.dto.ts`);

        this.fs.copyTpl(
            templateADTO,
            destinoADTO,
            variables
        );

        const templateBDTO = this.templatePath(TEMPLATES.BUSQUEDA_DTO);
        const destinoBDTO = this.destinationPath(`./dto/${nombreGuiones}.busqueda.dto.ts`);

        this.fs.copyTpl(
            templateBDTO,
            destinoBDTO,
            variables
        );

        const templateCDTO = this.templatePath(TEMPLATES.CREAR_DTO);
        const destinoCDTO = this.destinationPath(`./dto/${nombreGuiones}.crear.dto.ts`);

        this.fs.copyTpl(
            templateCDTO,
            destinoCDTO,
            variables
        );

        const templateH = this.templatePath(TEMPLATES.HABILITADO_DTO);
        const destinoH = this.destinationPath(`./dto/${nombreGuiones}.habilitado.dto.ts`);

        this.fs.copyTpl(
            templateH,
            destinoH,
            variables
        );

        const templateIM = this.templatePath(TEMPLATES.IMPORTS);
        const destinoIM = this.destinationPath(`./constantes/${nombreGuiones}.imports.ts`);

        this.fs.copyTpl(
            templateIM,
            destinoIM,
            variables
        );

        const templatePE = this.templatePath(TEMPLATES.PERMISOS);
        const destinoPE = this.destinationPath(`./constantes/${nombreGuiones}.permisos.ts`);

        this.fs.copyTpl(
            templatePE,
            destinoPE,
            variables
        );

        const templatePR = this.templatePath(TEMPLATES.PROVIDERS);
        const destinoPR = this.destinationPath(`./constantes/${nombreGuiones}.providers.ts`);

        this.fs.copyTpl(
            templatePR,
            destinoPR,
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
        const nombre = this.options[ARGUMENTOS.NOMBRE.nombre];
        this.log(`API ${nombre} creado :)`)
    }

};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

