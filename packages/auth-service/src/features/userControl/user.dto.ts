import { IsString, IsNotEmpty, IsOptional, ValidateNested, IsInt, IsNumber, IsArray } from 'class-validator';
import { User } from 'src/database/models/VAD10/user/user.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { ResponsePermissionDto, ResponseRoleDto } from '../auth/auth.dto';

export class RequestCreateUserDto {

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    password: string;
}


export class RequestUpdateRoleDto {
    @IsInt()
    id: number;
}
export class RequestUpdateUserDto {

    @IsOptional()
    // @ValidateNested({ each: true })
    roles: {id: number}[];
    @IsOptional()
    permissions?: [];
}

export class ResponseSimpleUserDto {

    id: number;

    userId: number;

    codusuario: string;

    login_name: string;

    descripcion: string;

    @IsOptional()
    @IsArray()
    roles: ResponseRoleDto[];

    @IsOptional()
    @IsArray()
    permissions: ResponsePermissionDto[];
}