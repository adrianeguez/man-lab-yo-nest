import { <%= nombreMayuscula %>CrearDto } from '../dto/<%= nombreGuiones%>.crear.dto';

export const <%= nombreSoloMayusculas %>_DATOS_PRUEBA: (() => <%= nombreMayuscula %>CrearDto)[] = [
  () => {
    const dato = new <%= nombreMayuscula %>CrearDto();
    // LLENAR DATOS DE PRUEBA
    // dato.nombreCampo = 'Valor campo';
    dato.<%= nombreHabilitado %> = ActivoInactivo.Activo;
    return dato;
  },
  () => {
    const dato = new <%= nombreMayuscula %>CrearDto();
    // LLENAR DATOS DE PRUEBA
    // dato.nombreCampo = 'Valor campo';
    dato.<%= nombreHabilitado %> = ActivoInactivo.Activo;
    return dato;
  },
  () => {
    const dato = new <%= nombreMayuscula %>CrearDto();
    // LLENAR DATOS DE PRUEBA
    // dato.nombreCampo = 'Valor campo';
    dato.<%= nombreHabilitado %> = ActivoInactivo.Activo;
    return dato;
  },
];
