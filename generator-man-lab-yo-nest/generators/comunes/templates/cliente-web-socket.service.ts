import { Injectable } from '@nestjs/common';
import * as io from 'socket.io-client';

@Injectable()
export class ClienteWebSocketService {
    socket;

    constructor() {
        this.iniciar();
    }

    iniciar() {
        this.socket = io('http://localhost:3001/URL_WEB_SOCKET');

        this.socket.on('connect', () => {
            console.log('Se conecto');
        });

        this.socket.on('event', () => {
            console.log('event');
        });

        this.socket.on('disconnect', () => {
            console.log('Se disconecto');
        });
    }

    ejemplo(datos): Promise<any> {
        return new Promise((resolve, reject) => {
            this.socket.emit('nombreSolicitud', datos, respuesta => {
                resolve(respuesta);
            });
        });
    }
}
