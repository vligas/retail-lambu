import { Controller, Get, Param, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { EtiquetaService } from './etiqueta.service';

@Controller('etiquetas')
export class EtiquetaControlController {

    constructor(private etiquetaControlService: EtiquetaService) { }

    @Get()
    async all() {
        return await this.etiquetaControlService.all();
    }
}