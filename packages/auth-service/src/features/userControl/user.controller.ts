import { Controller, Get, Param, Post, Body, Delete, UseGuards, Put, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { required, number } from 'joi';
import { UserService } from './user.service';
import { User } from 'src/database/models/VAD10/user/user.entity';
import { RequestCreateUserDto, RequestUpdateUserDto } from './user.dto';
import { ValidateGuard } from '../auth/guard/guard.service';

@Controller('users')
export class UserControlController {

    constructor(private userControlService: UserService) { }

    @Get()
    async all() {
        return await this.userControlService.all();
    }

    @Get(':id')
    async one(@Param('id') id: number) {
        return await this.userControlService.one(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body(new ValidationPipe({ transform: true, whitelist: true })) user: RequestUpdateUserDto) {
        return await this.userControlService.update(id, user);
    }

}

