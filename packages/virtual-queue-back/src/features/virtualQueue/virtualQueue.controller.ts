import { Controller, Get, Post, Body, All, UseGuards, ValidationPipe, Param, Put, Delete, UseInterceptors, Query } from '@nestjs/common';
import { VirtualQueueService } from './virtualQueue.service';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from '../../common/decorators/query/pagination.decorator';
import { QueryOptions } from '../../common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from '../../common/interfaces/serviceOptions.interface';
import { Where } from 'src/common/decorators/query/where.decorator';
import { number } from 'joi';
import { VirtualQueueGateway } from './virtualQueue.gateway';

@Controller('turns')
export class VirtualQueueController {
    constructor(
        private virtualQueueService: VirtualQueueService,
        private socket: VirtualQueueGateway,
    ) { }
    @Get()
    async all(
        @QueryOptions() options: ServiceOptions
    ) {
        return await this.virtualQueueService.all(options);
    }

    @Get(':id')
    async actualTurns(@Param('id') id: number) {
        return await this.virtualQueueService.actualTurn(id);
    }

    @Get(':test')
    async test(@QueryOptions() options: ServiceOptions) {
        console.log('//////////////////////////////////////////////');

        console.log(this.socket.server);

        return await this.virtualQueueService.all(options);
    }

    @Post(':id/next-turns')
    async nextTurns(@Param('id') id: number) {
        return await this.virtualQueueService.nextTurn(id);
    }

}
