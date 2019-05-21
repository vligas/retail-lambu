import { Controller, Get, Put, Param, Post, Body, Delete, UseGuards, Query, ValidationPipe } from '@nestjs/common';
import { BranchOfficeService } from './branchOffice.service';
import { QueryOptionsPipe } from 'src/common/pipes/queryOptions.pipe';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

//@UseGuards(PermissionsGuard())
@Controller('branch-offices')
export class BranchOfficeController {

    constructor(private branchService: BranchOfficeService) { }

    @Get()
    async all() {
        return await this.branchService.all();
    }



}
