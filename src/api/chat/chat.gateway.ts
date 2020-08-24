import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WsException,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { RoomService } from '../room/room.service';

@WebSocketGateway(150)
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(private roomService: RoomService) {}

    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('LivechatGateway');

    afterInit(server: Server) {
        this.logger.log('Socket initialized successfully.');
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    async handleConnection(client: Socket, ...args: any[]) {
        const rooms = await this.roomService.findAll();
        client.emit('rooms', { rooms });

        this.logger.log(`Client connected: ${client.id}`);
    }

    @SubscribeMessage('room:join')
    async onRoomJoin(client: Socket, data: any) {
        const { id } = data[0];

        this.logger.log(`${client.id}: joined room '${id}'`);
        client.join(id);

        // Send messages within picked channel
        client.emit('messages', { messages: [] });
    }

    @SubscribeMessage('room:leave')
    async onRoomLeave(client: Socket, data: any) {
        const { id } = data[0];

        this.logger.log(`${client.id}: leaves room ${id}`);
        client.leave(id);
    }

    @SubscribeMessage('room:create')
    async onRoomCreate(client: Socket, data: any) {
        const { name } = data[0];

        const room = await this.roomService.create({ name });
        client.emit('createdRoom', { room });
    }

    @SubscribeMessage('room:fetch')
    async onClientFetchRooms(client: Socket) {
        client.emit('rooms', { rooms: this.roomService.findAll() });
    }
}