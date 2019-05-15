import { Controller, UseInterceptors, Get, Param, Post, Body, Put } from '@nestjs/common';
import { RouteService } from './route.service';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { RequestToAssignRouterDto, RequestUpdateRouterDto } from './route.dto';


@Controller('route')
export class RouteController {
    constructor(
        private routeUserService: RouteService
    ){ }

    @UseInterceptors(QueryOptionsInterceptor)
    @Where({ 
        userId: ['eq'],
        branchOfficeId: ['eq']
     })
    @Paginate(100)
    @Get('user/:id')
    async byUser(
        @Param('id') userId: number,
        @QueryOptions() options: ServiceOptions
    ){
        return this.routeUserService.byUser(userId, options);
    }

    @Post('user/:id')
    async create( @Param('id') userId: number, @Body() userRoutes: RequestUpdateRouterDto){
        return this.routeUserService.create(userId, userRoutes);
    }

    @Put('user/:id')
    async update( @Param('id') userId: number, @Body() userRoutes: RequestUpdateRouterDto){
        return this.routeUserService.update(userId, userRoutes);
    }

}
