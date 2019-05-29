import { Controller, Get, Post, Body, All, UseGuards, ValidationPipe, Param, Put, Delete, UseInterceptors, Query } from '@nestjs/common';
import { VirtualQueueService } from './virtualQueue.service';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from '../../common/decorators/query/pagination.decorator';
import { QueryOptions } from '../../common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from '../../common/interfaces/serviceOptions.interface';
import { VirtualQueueGateway } from './virtualQueue.gateway';

@Controller('turns')
export class VirtualQueueController {
    constructor(
        private virtualQueueService: VirtualQueueService,
        private socket: VirtualQueueGateway,
    ) { }
    @Get()
    async all(
    ) {
        return await this.virtualQueueService.all();
    }

}
