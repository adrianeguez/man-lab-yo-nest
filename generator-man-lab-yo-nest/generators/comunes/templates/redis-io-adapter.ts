import { IoAdapter } from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';
import { init } from '../environment/init';
import { CONFIG_ENVIRONMENT } from '../environment/config';

init();
const redisAdapter = redisIoAdapter({
    host: CONFIG_ENVIRONMENT.dbConnections.redisConnection.host,
    port: CONFIG_ENVIRONMENT.dbConnections.redisConnection.port,
    auth_pass: CONFIG_ENVIRONMENT.dbConnections.redisConnection.password,
});

export class RedisIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: any): any {
        const server = super.createIOServer(port, options);
        server.adapter(redisAdapter);
        return server;
    }
}
