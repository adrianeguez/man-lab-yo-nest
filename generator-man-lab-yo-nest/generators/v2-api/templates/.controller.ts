import {
    Controller,
    Get,
    HttpCode,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import {<%= nombreMayuscula %>Service} from './<%= nombreGuiones%>.service';
import {<%= nombreMayuscula %>HabilitadoDto} from './dto/<%= nombreGuiones%>.habilitado.dto';
import {<%= nombreSoloMayusculas %>_OCC} from './constantes/<%= nombreGuiones%>.occ';
import {<%= nombreMayuscula %>CrearDto} from './dto/<%= nombreGuiones%>.crear.dto';
import {<%= nombreMayuscula %>ActualizarDto} from './dto/<%= nombreGuiones%>.actualizar.dto';
import {FindConditions, FindManyOptions, Like} from 'typeorm';
import {<%= nombreMayuscula %>Entity} from './<%= nombreGuiones%>.entity';
import {<%= nombreMayuscula %>BusquedaDto} from './dto/<%= nombreGuiones%>.busqueda.dto';

const nombreControlador = '<%= nombreGuiones%>';

@Controller(nombreControlador)
export class <%= nombreMayuscula %>Controller extends ControladorComun {
    constructor(
        private readonly _<%= nombreCamel %>Service: <%= nombreMayuscula %>Service,
        private readonly _auditoriaService: AuditoriaService,
    ) {
        super(
            _<%= nombreCamel %>Service,
            _auditoriaService,
            <%= nombreSoloMayusculas %>_OCC(
                <%= nombreMayuscula %>HabilitadoDto,
                <%= nombreMayuscula %>CrearDto,
                <%= nombreMayuscula %>ActualizarDto,
                <%= nombreMayuscula %>BusquedaDto,
            ),
        );
    }

    @Get('')
    @HttpCode(200)
    @UseGuards(SeguridadGuard)
    async obtener(
        @Query() parametrosConsulta: <%= nombreMayuscula %>BusquedaDto,
        @Req() request,
    ) {
        const respuesta = await this.validarBusquedaDto(
            request,
            parametrosConsulta,
        );
        if (respuesta === 'ok') {
            const aliasTabla = nombreControlador;
            const qb = this._<%= nombreCamel %>Service.<%= nombreCamel %>EntityRepository // QUERY BUILDER https://typeorm.io/#/select-query-builder
                .createQueryBuilder(aliasTabla);

            let consulta: FindManyOptions<<%= nombreMayuscula %>Entity> = {
                where: [],
            };
            // Setear Skip y Take (limit y offset)
            consulta = this.setearSkipYTake(
                consulta,
                parametrosConsulta.skip,
                parametrosConsulta.take,
            );
            // Definir el orden según los parámtros sortField y sortOrder
            const orden = this._<%= nombreCamel %>Service.establecerOrden(
                parametrosConsulta.sortField,
                parametrosConsulta.sortOrder,
            );
            // Búsqueda por el identificador
            const consultaPorId = this._<%= nombreCamel %>Service.establecerBusquedaPorId(
                parametrosConsulta,
                consulta
            );
            if (consultaPorId) {
                // Si busca solo por Identificador no necesitamos hacer nada mas
                consulta = consultaPorId;
            } else {
                // Especifica todas las busquedas dentro de la entidad AND y OR
                let consultaWhere = consulta.where as FindConditions<<%= nombreMayuscula %>Entity>[];
                // Aquí se definen todos los campos a buscar con OR. El campo por defecto de búsqueda
                // se llama 'busqueda'.
                // EJ: (nombre = busqueda) OR (cedula = busqueda)
                // if (parametrosConsulta.busqueda) {
                //     consultaWhere.push({nombre: Like('%' + parametrosConsulta.busqueda + '%')});
                //     consulta.where = consultaWhere;
                // }
                // if (parametrosConsulta.busqueda) {
                //     consultaWhere.push({cedula: Like('%' + parametrosConsulta.busqueda + '%')});
                //     consulta.where = consultaWhere;
                // }
                consultaWhere = consulta.where as FindConditions<<%= nombreMayuscula %>Entity>[];
                // Aquí van las condiciones AND de los filtros
                // EJ:
                // Buscar por (nombre = busqueda AND sisHabilitado = habilitado) O (Cedula = busqueda AND sisHabilitado = habilitado)
                // Notese que se van a repetir estas condiciones en todos los 'OR'
                consulta.where = this.setearFiltro(
                    '<%= nombreHabilitado %>',
                    consultaWhere,
                    parametrosConsulta.<%= nombreHabilitado %>,
                );
                consulta = this._<%= nombreCamel %>Service.convertirEnMayusculas(consulta);
            }

            qb.where(consulta.where);
            
            // RELACIONES CON PAPAS o HIJOS
            
            // qb.leftJoinAndSelect(aliasTabla + '.nombreRelacionUno', 'nombreRelacionUno');
            // qb.leftJoinAndSelect(aliasTabla + '.nombreRelacionDos', 'nombreRelacionDos');
            // qb.leftJoinAndSelect('nombreRelacionUno.campoOtraRelacionEnCampoRelacionUno', 'campoOtraRelacionEnCampoRelacionUno');
            // qb.leftJoinAndSelect('nombreRelacionDos.campoOtraRelacionEnCampoRelacionDos', 'campoOtraRelacionEnCampoRelacionDos');

            // CONSULTAS AVANZADAS EN OTRAS RELACIONES
            
            // if (parametrosConsulta.nombreCampoRelacionUno) {
            //     qb.andWhere('nombreRelacionUno.nombreCampoRelacionUno = :nombreCampoRelacionUno', {
            //         nombreCampoRelacionUno: parametrosConsulta.nombreCampoRelacionUno,
            //     })
            // }
            //
            // if (parametrosConsulta.nombreOtroCampoCualquiera) {
            //     qb .andWhere('campoOtraRelacionEnCampoRelacionUno.nombreOtroCampoCualquiera = :nombreOtroCampoCualquiera', {
            //         nombreOtroCampoCualquiera: parametrosConsulta.nombreOtroCampoCualquiera,
            //     });
            // }

            if (orden) {
                qb.orderBy(aliasTabla + '.' + orden.campo, orden.valor);
            }

            return qb.skip(consulta.skip)
                .take(consulta.take)
                .getManyAndCount();
        }
    }
}
