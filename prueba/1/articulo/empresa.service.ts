import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { EmpresaEntity } from './empresa.entity';
import {EmpresaBusquedaDto} from './dto/empresa.busqueda.dto';

@Injectable()
export class EmpresaService extends ServicioComun<EmpresaEntity, EmpresaBusquedaDto> {
  constructor(
    @InjectRepository(EmpresaEntity, NOMBRE_CADENA_CONEXION)
    public empresaEntityRepository: Repository<EmpresaEntity>,
    @InjectConnection(NOMBRE_CADENA_CONEXION) readonly _connection: Connection,
    private readonly _auditoriaService: AuditoriaService,
  ) {
    super(
        empresaEntityRepository,
      _connection,
        EmpresaEntity,
      'idEmpresa',
      _auditoriaService,
    );
  }
}
