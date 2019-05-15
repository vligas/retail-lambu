import { Controller, Get, UseInterceptors, Param, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { BranchOfficeService } from './branch-office.service';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { Where } from 'src/common/decorators/query/where.decorator';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { RequestCreateBranchOfficeDto, RequestUpdateBranchOfficeDto } from './branchOffice.dto';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

@UseGuards(PermissionsGuard())
@Controller('branch-office')
export class BranchOfficeController {

    constructor(
        private branchOffice: BranchOfficeService
    ) { }

    @UseInterceptors(QueryOptionsInterceptor)
    @Where({})
    @Paginate(100)
    @Get()
    async all(
        @QueryOptions() options: ServiceOptions
    ) {
        return this.branchOffice.all(options);
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        return await this.branchOffice.byId(id);
    }

    @Post()
    async create(@Body() competitor: RequestCreateBranchOfficeDto) {
        return await this.branchOffice.create(competitor);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() tag: RequestUpdateBranchOfficeDto) {
        return await this.branchOffice.update(id, tag);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.branchOffice.delete(id);
        return 'ok';
    }
}
