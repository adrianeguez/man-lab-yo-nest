import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { <%= nombreMayuscula %>Entity } from './<%= nombreGuiones%>.entity';
import {<%= nombreMayuscula %>BusquedaDto} from './dto/<%= nombreGuiones%>.busqueda.dto';

@Injectable()
export class <%= nombreMayuscula %>Service extends ServicioComun<<%= nombreMayuscula %>Entity, <%= nombreMayuscula %>BusquedaDto> {
  constructor(
    @InjectRepository(<%= nombreMayuscula %>Entity, NOMBRE_CADENA_CONEXION)
    public <%= nombreCamel %>EntityRepository: Repository<<%= nombreMayuscula %>Entity>,
    @InjectConnection(NOMBRE_CADENA_CONEXION) readonly _connection: Connection,
    private readonly _auditoriaService: AuditoriaService,
  ) {
    super(
        <%= nombreCamel %>EntityRepository,
      _connection,
        <%= nombreMayuscula %>Entity,
      '<%= id %>',
      _auditoriaService,
    );
  }
}
