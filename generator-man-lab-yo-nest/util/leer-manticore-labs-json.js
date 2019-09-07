const fs = require('fs');
module.exports = (path, codificacion) => {
    try {
        const contenido = fs.readFileSync(path, codificacion);
        const configuracion = JSON.parse(contenido);
        const ambientes = Object.keys(configuracion.environment);
        const objetoManticoreLabsJson = {
            nombreAplicativo: configuracion.nombreAplicativo,
            ambientes: {}
        };
        ambientes
            .forEach(
                (nombreAmbiente) => {
                    const ambiente = configuracion.environment[nombreAmbiente];
                    // tipo
                    const dev = ambiente.esDev;
                    // mysql
                    const hostMysql = ambiente.bases.mysql.host;
                    const puertoMysql = ambiente.bases.mysql.port;
                    const usernameMysql = ambiente.bases.mysql.username;
                    const passwordMysql = ambiente.bases.mysql.password;
                    const tagMysql = ambiente.bases.mysql.tagDocker;
                    // redis
                    const puertoRedis = ambiente.bases.redis.port;
                    const passwordRedis = ambiente.bases.redis.password;
                    const hostRedis = ambiente.bases.redis.host;
                    const tagRedis = ambiente.bases.redis.tagDocker;
                    // mongo
                    const urlMongo = ambiente.bases.mongo.url;
                    const tagMongo = ambiente.bases.mongo.tagDocker;
                    const puertoMongo = ambiente.bases.mongo.port;
                    // ambiente
                    const puertoLevanta = ambiente.ambiente.puertoLevanta;
                    const protocolo = ambiente.ambiente.protocolo;
                    const ip = ambiente.ambiente.ip;
                    const puertoEscucha = ambiente.ambiente.puertoEscucha;
                    const segmento = ambiente.ambiente.segmento;
                    // auth0
                    const auth0Cuenta = ambiente.auth0.cuenta;
                    const auth0ClientId = ambiente.auth0.clientId;
                    const auth0Secret = ambiente.auth0.secret;
                    const auth0ClientIdPassword = ambiente.auth0.clientIdPassword;
                    const auth0SecretPassword = ambiente.auth0.secretPassword;

                    const variables = {
                        dev,
                        hostMysql,
                        puertoMysql,
                        usernameMysql,
                        passwordMysql,
                        tagMysql,
                        puertoRedis,
                        passwordRedis,
                        hostRedis,
                        tagRedis,
                        urlMongo,
                        tagMongo,
                        puertoMongo,
                        puertoLevanta,
                        protocolo,
                        ip,
                        puertoEscucha,
                        segmento,
                        auth0Cuenta,
                        auth0ClientId,
                        auth0Secret,
                        auth0ClientIdPassword,
                        auth0SecretPassword,
                        nombreAplicativo: configuracion.nombreAplicativo
                    };
                    objetoManticoreLabsJson.ambientes[nombreAmbiente] = variables

                }
            );
        return objetoManticoreLabsJson;
    } catch (e) {
        console.error({
            error: e,
            mensaje: 'No existe el archivo .manticore-labs.json'
        });
        throw Error('No existe archivo .manticore-labs.json')
    }

};
