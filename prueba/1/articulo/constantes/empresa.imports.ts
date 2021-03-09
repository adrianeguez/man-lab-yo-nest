import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaEntity } from '../empresa.entity';

export const EMPRESA_IMPORTS = [
  TypeOrmModule.forFeature([EmpresaEntity], NOMBRE_CADENA_CONEXION),
  SeguridadModule,
  AuditoriaModule,
];
