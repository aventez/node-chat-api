import {
    WebSocketGateway,
    SubscribeMessage,
    WsResponse,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';
import { Observable } from 'rxjs';

@WebSocketGateway(81, { transports: ['websocket'] })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server;

    connectedUsers: string[] = [];

    async handleConnection(socket) {
        console.log('elo');

        this.server.emit('users', ['test']);
    }

    async handleDisconnect(socket) {
        this.server.emit('users', ['test2']);
    }

    /*@SubscribeMessage('message')
    async onMessage(client, data: any) {
        const event: string = 'message';
        const result = data[0];
    }*/
}