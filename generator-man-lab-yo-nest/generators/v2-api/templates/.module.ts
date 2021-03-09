import { Module } from '@nestjs/common';
import { <%= nombreMayuscula %>Controller } from './<%= nombreGuiones%>.controller';
import { <%= nombreSoloMayusculas %>_IMPORTS } from './constantes/<%= nombreGuiones%>.imports';
import { <%= nombreSoloMayusculas %>_PROVIDERS } from './constantes/<%= nombreGuiones%>.providers';

@Module({
  imports: [...<%= nombreSoloMayusculas %>_IMPORTS],
  providers: [...<%= nombreSoloMayusculas %>_PROVIDERS],
  exports: [...<%= nombreSoloMayusculas %>_PROVIDERS],
  controllers: [<%= nombreMayuscula %>Controller],
})
export class <%= nombreMayuscula %>Module {}
