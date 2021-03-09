
export const PERMISOS_<%= nombreSoloMayusculas %>: (
) => {permisos:ObjetoSeguridadPermisos[], nombreEntidad:string} = () => {
  const nombreEntidad = '<%= nombreGuiones%>';
  const permisos: ObjetoSeguridadPermisos[] = [
    {
      nombrePermiso: nombreEntidad + 'Crear',
      metodoHTTP: 'POST',
      urlExpressionRegular: /\/<%= nombreGuiones%>/, // /<%= nombreGuiones%>
    },
    {
      nombrePermiso: nombreEntidad + 'Buscar',
      metodoHTTP: 'GET',
      urlExpressionRegular: /\/<%= nombreGuiones%>\??(([a-zA-Z0-9]+)=[a-zA-Z0-9]+&?)*/, // /<%= nombreGuiones%>?asdas=asdasd
    },
    {
      nombrePermiso: nombreEntidad + 'EditarHabilitado',
      metodoHTTP: 'PUT',
      urlExpressionRegular: /\/<%= nombreGuiones%>\/\d+\/modificar-habilitado/, // /<%= nombreGuiones%>/1/modificar-habilitado
    },
    {
      nombrePermiso: nombreEntidad + 'Editar',
      metodoHTTP: 'PUT',
      urlExpressionRegular: /\/<%= nombreGuiones%>\/\d+/, // /<%= nombreGuiones%>/1
    },
  ];
  return {
    permisos,
    nombreEntidad
  };
};
