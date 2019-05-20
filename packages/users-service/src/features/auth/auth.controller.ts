import { Controller, Get, Post, Body, All, UseGuards, ValidationPipe, Param, Put, Delete } from '@nestjs/common';
import { RequestLoginDto, RequestCreateRoleDto, RequestUpdateRoleDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleService } from './role.service';
// import { PermissionsGuard } from 'src/common/guards/permissions.guard';
import { UserService } from '../userControl/user.service';
import { RequestContext } from 'src/common/interfaces/requestContext.class';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private roleService: RoleService
    ) { }

    @Post('login')
    async login(@Body() credentials: RequestLoginDto) {
        const user = await this.authService.checkCredentials(credentials);
        user.setDataValue('permissions', await this.userService.getPermissions(user.login_name));
        const jwt = await this.authService.createToken(user);
        return { ...jwt, user };
    }


    @All('protected')
    // @UseGuards(PermissionsGuard('can-update-products'))
    async protect() {
        console.log('entre');
    }


    @Get('permissions')
    async getPermissions() {
        return await this.roleService.allPermissions();
    }

    @Get('roles')
    async getRoles() {
        return await this.roleService.all();
    }

    @Get('roles/:id')
    async getRole(@Param('id') id: number) {
        return await this.roleService.one(id);
    }

    @Put('roles/:id')
    async updateRole(@Param('id') id: number, @Body(new ValidationPipe({ transform: true, whitelist: true })) role: RequestUpdateRoleDto) {
        return await this.roleService.update(id, role);
    }

    @Post('roles')
    async createRole(@Body(new ValidationPipe({ transform: true, whitelist: true })) role: RequestCreateRoleDto) {
        return await this.roleService.create(role);
    }

    @Delete('roles/:id')
    async delete(@Param('id') id: number) {
        await this.roleService.deleteRol(id);
        return 'ok';
    }
}