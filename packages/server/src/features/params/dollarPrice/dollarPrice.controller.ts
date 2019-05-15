import { Controller, Get, Param, Post, Body, Delete, UseGuards } from '@nestjs/common';
import { DollarPriceService } from './dollarPrice.service';
import { RequestCreateDollarPriceDto } from './dollarPrice.dto';

@Controller('dollar-prices')
export class DollarPriceController {

    constructor(private dollarPriceService: DollarPriceService) { }

    @Get()
    async all() {
        return await this.dollarPriceService.all();
    }

    @Get('latest/')
    async latest() {
        return await this.dollarPriceService.latest();
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        return await this.dollarPriceService.one(id);
    }

    @Post()
    async create(@Body() dollarPrice: RequestCreateDollarPriceDto) {
        return await this.dollarPriceService.create(dollarPrice);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.dollarPriceService.delete(id);
        return 'ok';
    }

}

