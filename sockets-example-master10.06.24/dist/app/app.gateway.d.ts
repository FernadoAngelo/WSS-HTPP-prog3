import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
type mensageType = {
    clientID: any;
    menssage: string;
};
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    mensageArr: mensageType[];
    server: Server;
    private logger;
    handleMessage(client: Socket, payload: string): void;
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
export {};
