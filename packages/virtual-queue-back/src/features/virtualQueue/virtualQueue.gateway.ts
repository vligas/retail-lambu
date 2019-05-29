import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WsResponse } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Client, Server } from 'socket.io';

@WebSocketGateway()
export class VirtualQueueGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server;
    users: number = 0;

    afterInit() {
        console.log('Init Socket: ', this.users);
    }

    async handleConnection() {
        
        // A client has connected
        this.users++;
        console.log('[CONNECT]: active users: ', this.users);

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    async handleDisconnect() {

        // A client has disconnected
        this.users--;
        console.log('[DISCONNECT]: active users: ', this.users);

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    @SubscribeMessage('events')
    findAll(client: Client, data: any): Observable<WsResponse<number>> {
      return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
    
    @SubscribeMessage('identity')
    async identity(client: Client, data: number): Promise<number> {
      return data;
    }

}
