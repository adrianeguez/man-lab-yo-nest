"use strict";
exports.__esModule = true;
var fs = require("fs");
var configuracion_ip_puerto_1 = require("./configuracion-ip-puerto");
var arregloAmbiente = process.argv;
var produccion = arregloAmbiente.find(function (a) {
    return a === 'prod';
});
var preProduccion = arregloAmbiente.find(function (a) {
    return a === 'preprod';
});
var test = arregloAmbiente.find(function (a) {
    return a === 'test';
});
var dev = arregloAmbiente.find(function (a) {
    return a === 'dev';
});
var nombreArchivo;
if (produccion) {
    nombreArchivo = configuracion_ip_puerto_1.CONFIG_IP_PUERTO.prod.nombreArchivo;
}
if (preProduccion) {
    nombreArchivo = configuracion_ip_puerto_1.CONFIG_IP_PUERTO.preProd.nombreArchivo;
}
if (test) {
    nombreArchivo = configuracion_ip_puerto_1.CONFIG_IP_PUERTO.test.nombreArchivo;
}
if (dev) {
    nombreArchivo = configuracion_ip_puerto_1.CONFIG_IP_PUERTO.dev.nombreArchivo;
}
if (!produccion && !preProduccion && !test && !dev) {
} else {
    try {
        var pathEnvironment = __dirname + '/../src/environment/';
        fs.createReadStream(pathEnvironment + nombreArchivo).pipe(fs.createWriteStream(pathEnvironment + 'config.ts'));
    } catch (e) {
        console.log('ERROR', e);
        throw new Error(JSON.stringify({error: e}));
    }
}
