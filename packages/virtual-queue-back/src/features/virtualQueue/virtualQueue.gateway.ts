import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway()
export class VirtualQueueGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;
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

    // @SubscribeMessage('chat')
    // async onChat(client, message) {
    //     client.broadcast.emit('chat', message);
    // }

}
