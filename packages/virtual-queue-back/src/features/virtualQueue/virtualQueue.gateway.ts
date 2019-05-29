import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WsResponse } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Client, Server } from 'socket.io';

@WebSocketGateway()
export class VirtualQueueGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;
  users: number = 0;
  clients = []

  afterInit() {
    console.log('Init Socket: ', this.users);
  }

  async handleConnection(client: any) {

    // A client has connected
    this.users++;
    this.clients.push(client);
    console.log('[CONNECT]: active users: ', this.users, client.id);

    // Notify connected clients of current users
    //this.server.emit('users', this.users);

  }

  async handleDisconnect(client: any) {
    // A client has disconnected
    this.users--;
    this.clients = this.clients.filter(p => p.id !== client.id);
    this.users = this.clients.length
    console.log('[DISCONNECT]: active users: ', this.users, this.clients);

    // Notify connected clients of current users
    //this.server.emit('users', this.users);

  }

  @SubscribeMessage('events')
  onEventAsync(client: Client, data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('events2')
  onEvent(client: Client, data: any): WsResponse<string> {
    return { event: 'events2', data: 'data-100' };
  }

  @SubscribeMessage('identity')
  async identity(client: Client, data: number): Promise<number> {
    return data;
  }

}
