import * as fs from 'fs';
import {CONFIG_IP_PUERTO} from './configuracion-ip-puerto';

const arregloAmbiente = process.argv;
const produccion = arregloAmbiente.find((a) => a === 'prod');
const preProduccion = arregloAmbiente.find((a) => a === 'preprod');
const test = arregloAmbiente.find((a) => a === 'test');
const dev = arregloAmbiente.find((a) => a === 'dev');

let nombreArchivo;

if (produccion) {
    nombreArchivo = CONFIG_IP_PUERTO.prod.nombreArchivo;
}
if (preProduccion) {
    nombreArchivo = CONFIG_IP_PUERTO.preProd.nombreArchivo;
}
if (test) {
    nombreArchivo = CONFIG_IP_PUERTO.test.nombreArchivo;
}
if (dev) {
    nombreArchivo = CONFIG_IP_PUERTO.dev.nombreArchivo;
}
if (!produccion && !preProduccion && !test && !dev) {

} else {
    try {
        const pathEnvironment = __dirname + '/../src/environment/';
        fs.createReadStream(pathEnvironment + nombreArchivo).pipe(fs.createWriteStream(pathEnvironment + 'config.ts'));
    } catch (e) {
        console.log('ERROR', e);
        throw new Error(JSON.stringify({error: e}));
    }

}
