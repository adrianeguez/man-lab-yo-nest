import { EmpresaCrearDto } from '../dto/empresa.crear.dto';

export const EMPRESA_DATOS_PRUEBA: (() => EmpresaCrearDto)[] = [
  () => {
    const dato = new EmpresaCrearDto();
    // LLENAR DATOS DE PRUEBA
    // dato.nombreCampo = 'Valor campo';
    dato.sisHabilitado = ActivoInactivo.ACTIVO;
    return dato;
  },
  () => {
    const dato = new EmpresaCrearDto();
    // LLENAR DATOS DE PRUEBA
    // dato.nombreCampo = 'Valor campo';
    dato.sisHabilitado = ActivoInactivo.ACTIVO;
    return dato;
  },
  () => {
    const dato = new EmpresaCrearDto();
    // LLENAR DATOS DE PRUEBA
    // dato.nombreCampo = 'Valor campo';
    dato.sisHabilitado = ActivoInactivo.ACTIVO;
    return dato;
  },
];
