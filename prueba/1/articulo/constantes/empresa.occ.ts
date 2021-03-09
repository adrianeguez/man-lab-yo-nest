
export const EMPRESA_OCC: (
  modificarHabilitadoDto,
  crearDto,
  actualizarDto,
  busquedaDto,
) => ObjetoControladorComun = (
    modificarHabilitadoDto,
  crearDto,
  actualizarDto,
  busquedaDto,
) => {
  const nombre = 'Empresa';
  return {
    modificarHabilitado: {
      dto: modificarHabilitadoDto,
      mensaje: 'Error modificando habilitado',
    },
    crearEntidad: {
      dto: crearDto,
      mensaje: 'Error creando ' + nombre,
    },
    actualizarEntidad: {
      dto: actualizarDto,
      mensaje: 'Error actualizando ' + nombre,
    },
    busqueda: {
      dto: busquedaDto,
      mensaje: 'Error buscando ' + nombre,
    },
  };
};
