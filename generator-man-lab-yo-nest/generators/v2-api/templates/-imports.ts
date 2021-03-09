import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= nombreMayuscula %>Entity } from '../<%= nombreGuiones%>.entity';

export const <%= nombreSoloMayusculas %>_IMPORTS = [
  TypeOrmModule.forFeature([<%= nombreMayuscula %>Entity], NOMBRE_CADENA_CONEXION),
  SeguridadModule,
  AuditoriaModule,
];
