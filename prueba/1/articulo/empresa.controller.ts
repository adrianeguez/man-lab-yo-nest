import {
    Controller,
    Get,
    HttpCode,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import {EmpresaService} from './empresa.service';
import {EmpresaHabilitadoDto} from './dto/empresa.habilitado.dto';
import {EMPRESA_OCC} from './constantes/empresa.occ';
import {EmpresaCrearDto} from './dto/empresa.crear.dto';
import {EmpresaActualizarDto} from './dto/empresa.actualizar.dto';
import {FindConditions, FindManyOptions, Like} from 'typeorm';
import {EmpresaEntity} from './empresa.entity';
import {EmpresaBusquedaDto} from './dto/empresa.busqueda.dto';

const nombreControlador = 'empresa';

@Controller(nombreControlador)
export class EmpresaController extends ControladorComun {
    constructor(
        private readonly _empresaService: EmpresaService,
        private readonly _auditoriaService: AuditoriaService,
    ) {
        super(
            _empresaService,
            _auditoriaService,
            EMPRESA_OCC(
                EmpresaHabilitadoDto,
                EmpresaCrearDto,
                EmpresaActualizarDto,
                EmpresaBusquedaDto,
            ),
        );
    }

    @Get('')
    @HttpCode(200)
    @UseGuards(SeguridadGuard)
    async obtener(
        @Query() parametrosConsulta: EmpresaBusquedaDto,
        @Req() request,
    ) {
        const respuesta = await this.validarBusquedaDto(
            request,
            parametrosConsulta,
        );
        if (respuesta === 'ok') {
            const aliasTabla = nombreControlador;
            const qb = this._empresaService.empresaEntityRepository // QUERY BUILDER https://typeorm.io/#/select-query-builder
                .createQueryBuilder(aliasTabla);

            let consulta: FindManyOptions<EmpresaEntity> = {
                where: [],
            };
            // Setear Skip y Take (limit y offset)
            consulta = this.setearSkipYTake(
                consulta,
                parametrosConsulta.skip,
                parametrosConsulta.take,
            );
            // Definir el orden según los parámtros sortField y sortOrder
            const orden = this._empresaService.establecerOrden(
                parametrosConsulta.sortField,
                parametrosConsulta.sortOrder,
            );
            // Búsqueda por el identificador
            const consultaPorId = this._empresaService.establecerBusquedaPorId(
                parametrosConsulta,
                consulta
            );
            if (consultaPorId) {
                // Si busca solo por Identificador no necesitamos hacer nada mas
                consulta = consultaPorId;
            } else {
                // Especifica todas las busquedas dentro de la entidad AND y OR
                let consultaWhere = consulta.where as FindConditions<EmpresaEntity>[];
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
                consultaWhere = consulta.where as FindConditions<EmpresaEntity>[];
                // Aquí van las condiciones AND de los filtros
                // EJ:
                // Buscar por (nombre = busqueda AND sisHabilitado = habilitado) O (Cedula = busqueda AND sisHabilitado = habilitado)
                // Notese que se van a repetir estas condiciones en todos los 'OR'
                consulta.where = this.setearFiltro(
                    'sisHabilitado',
                    consultaWhere,
                    parametrosConsulta.sisHabilitado,
                );
                consulta = this._empresaService.convertirEnMayusculas(consulta);
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
