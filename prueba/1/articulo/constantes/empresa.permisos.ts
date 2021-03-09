
export const PERMISOS_EMPRESA: (
) => {permisos:ObjetoSeguridadPermisos[], nombreEntidad:string} = () => {
  const nombreEntidad = 'empresa';
  const permisos: ObjetoSeguridadPermisos[] = [
    {
      nombrePermiso: nombreEntidad + 'Crear',
      metodoHTTP: 'POST',
      urlExpressionRegular: /\/empresa/, // /empresa
    },
    {
      nombrePermiso: nombreEntidad + 'Buscar',
      metodoHTTP: 'GET',
      urlExpressionRegular: /\/empresa\??(([a-zA-Z0-9]+)=[a-zA-Z0-9]+&?)*/, // /empresa?asdas=asdasd
    },
    {
      nombrePermiso: nombreEntidad + 'EditarHabilitado',
      metodoHTTP: 'PUT',
      urlExpressionRegular: /\/empresa\/\d+\/modificar-habilitado/, // /empresa/1/modificar-habilitado
    },
    {
      nombrePermiso: nombreEntidad + 'Editar',
      metodoHTTP: 'PUT',
      urlExpressionRegular: /\/empresa\/\d+/, // /empresa/1
    },
  ];
  return {
    permisos,
    nombreEntidad
  };
};
