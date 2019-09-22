import { Module } from '@nestjs/common';
import { ClienteWebSocketService } from './cliente-web-socket.service';

@Module({
    providers: [ClienteWebSocketService],
    exports: [ClienteWebSocketService],
})
export class ClienteWebSocketModule {}
