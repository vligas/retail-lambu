import { Controller, Get, Body, ValidationPipe, Put, UseGuards } from '@nestjs/common';
import { AppConfigService } from './appConfig.service';
import { RequestUpdateConfigDto } from './appConfig.dto';
import { AuthGuard } from '@nestjs/passport';



@Controller('config')
export class AppConfigController {

    constructor(private configService: AppConfigService) { }

    @Get()
    async all() {
        return await this.configService.all();
    }

    @Put()
    async update(@Body(new ValidationPipe({ whitelist: true, transform: true })) config: RequestUpdateConfigDto) {
        await this.configService.update(config);
        return await this.configService.all();
    }
}