
import { ResponseRoleDto, ResponsePermissionDto } from './auth.dto';




export interface RequestCreateUserDto {




    firstName: string;




    lastName: string;




    username: string;




    password: string;
}


export interface RequestUpdateRoleDto {

    id: number;
}
export interface RequestUpdateUserDto {


    // 
    roles: { id: number }[];

    permissions: [];
}

export interface ResponseSimpleUserDto {

    id: number;

    userId: number;

    codusuario: string;

    login_name: string;

    descripcion: string;



    roles: ResponseRoleDto[];



    permissions: ResponsePermissionDto[];
}