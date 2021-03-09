import { Module } from '@nestjs/common';
import { EmpresaController } from './empresa.controller';
import { EMPRESA_IMPORTS } from './constantes/empresa.imports';
import { EMPRESA_PROVIDERS } from './constantes/empresa.providers';

@Module({
  imports: [...EMPRESA_IMPORTS],
  providers: [...EMPRESA_PROVIDERS],
  exports: [...EMPRESA_PROVIDERS],
  controllers: [EmpresaController],
})
export class EmpresaModule {}
