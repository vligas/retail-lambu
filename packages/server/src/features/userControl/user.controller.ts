import { Controller, Get, Param, Post, Body, Delete, UseGuards, Put, ValidationPipe, UseInterceptors } from '@nestjs/common';
import { required, number } from 'joi';
import { UserService } from './user.service';
import { User } from 'src/database/models/VAD10/user/user.entity';
import { RequestCreateUserDto, RequestUpdateUserDto } from './user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseFormat } from 'src/common/interfaces/generics.type';
import { CompleteUser } from 'src/database/models/VAD10/completeUser/completeUser.entity';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { Paginate } from 'src/common/decorators/query/pagination.decorator';
import { QueryOptionsInterceptor } from 'src/common/interceptors/queryOptions.interceptor';
import { QueryOptions } from 'src/common/decorators/query/queryOptions.decorator';
import { Options } from 'src/common/interfaces/options.interface';

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

