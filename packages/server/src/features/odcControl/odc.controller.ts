import { Controller, Get, Param, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { OdcService } from './odc.service';

@Controller('odc')
export class OdcControlController {

    constructor(private odcControlService: OdcService) { }

    @Get()
    async all() {
        return await this.odcControlService.all();
    }
}