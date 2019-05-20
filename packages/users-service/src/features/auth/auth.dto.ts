import { IsString, IsNotEmpty, IsOptional, MinLength, IsInt, ArrayNotEmpty, IsArray } from 'class-validator';

export class RequestLoginDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class ResponseSucursalDto{
    "C_codigo": string;
    "c_descripcion": string;
    "c_direccion": string;
    "c_gerente": string;
    "c_subgerebte": string;
    "c_telefono": string;
    "c_estado": number;
    "c_servidor": string;
    "B_TRASMITIR": boolean;
    "B_ACTVAD10": boolean;
    "c_ciudad": string;
    "c_nombre_cheque": string;
    "cu_DireccionUltimaVersion": string;
    "nu_ActualizarUltimaVersion": number;
    "nu_MensajeUltimaVersion": number
}

export class ResponseLoginDto {
    token: string;
    user: {
        codusuario: string;
        password: string;
        // tslint:disable-next-line:variable-name
        login_name: string;
        descripcion: string;
        localidad: string;
        // tslint:disable-next-line:variable-name
        Nivel: number;
        // tslint:disable-next-line:variable-name
        Vendedor: number;
        // tslint:disable-next-line:variable-name
        tipo_usuario: boolean;
        MOD_PRECIO_VENTA: boolean;
        MOD_COSTO_COMPRA: boolean;

        BU_CAMBIA_CLAVE: number;
        ID: number;
        BS_ACTIVO: boolean;

        sucursales: ResponseSucursalDto
    };
}


export class RequestCreateRolePermissionDto {
    @IsInt()
    id: number;
}
export class RequestCreateRoleDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    // @ValidateNested({ each: true })
    @ArrayNotEmpty()
    permissions: RequestCreateRolePermissionDto[];
}

export class RequestUpdateRoleDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    // @ValidateNested({ each: true })
    @ArrayNotEmpty()
    @IsOptional()
    permissions: RequestCreateRolePermissionDto[];

}


export class ResponsePermissionDto {
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;
}


export class ResponseRoleDto {
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsArray()
    permissions: ResponsePermissionDto[];

}

