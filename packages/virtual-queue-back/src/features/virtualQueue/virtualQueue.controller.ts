import { Controller, Get, Post, Body, All, UseGuards, ValidationPipe, Param, Put, Delete, UseInterceptors, Query, Logger } from '@nestjs/common';
import { VirtualQueueService } from './virtualQueue.service';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from '../../common/decorators/query/pagination.decorator';
import { QueryOptions } from '../../common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from '../../common/interfaces/serviceOptions.interface';
import { Where } from 'src/common/decorators/query/where.decorator';
import { number } from 'joi';
import { VirtualQueueGateway } from './virtualQueue.gateway';
import { RequestCreateVirtualQueueDto } from './virtualQueue.dto';
import { logger } from '@retail/common';

@Controller('queue')
export class VirtualQueueController {
    constructor(
        private virtualQueueService: VirtualQueueService,
        private socket: VirtualQueueGateway,
    ) { }

    @Get()
    async all(
        @QueryOptions() options: ServiceOptions,
    ) {
        return await this.virtualQueueService.all(options);
    }

    @Get(':id')
    async actualQueue(@Param('id') id: number) {
        return await this.virtualQueueService.actualQueue(id);
    }
    
    @Post()
    async create(@Body() queue: RequestCreateVirtualQueueDto){
        return await this.virtualQueueService.create(queue);
    }

    @Post(':id/next-turns')
    async nextTurnsByQueue(@Param('id') id: number) {
        const register = await this.virtualQueueService.nextTurnByQueue(id);
        const all = await this.virtualQueueService.all();
        const clients = this.socket.clients;
        for (let i = 0; i < clients.length; i++) {
            clients[i].send(JSON.stringify({ data: all, type: '[Turn] Set Turn' }));
        }

        return register;
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() queue: RequestCreateVirtualQueueDto){
        await this.virtualQueueService.update(id, queue);
        return await this.virtualQueueService.all();
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        let rsp= await this.virtualQueueService.delete(id);
        return ((rsp)?'ok': 'false');
    }

}
