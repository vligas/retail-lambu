

export interface RequestLoginDto {

    
    
    username: string;

    
    
    password: string;
}

export interface ResponseSucursalDto{
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

export interface ResponseLoginDto {
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


export interface RequestCreateRolePermissionDto {
    
    id: number;
}
export interface RequestCreateRoleDto {
    
    
    name: string;

    
    
    description: string;

    // 
    
    permissions: RequestCreateRolePermissionDto[];
}

export interface RequestUpdateRoleDto {
    
    
    name: string;

    
    
    description: string;

    // 
    
    
    permissions: RequestCreateRolePermissionDto[];

}


export interface ResponsePermissionDto {
    
    
    id: number;

    
    
    name: string;

    
    description: string;
}


export interface ResponseRoleDto {
    
    
    id: number;

    
    
    name: string;

    
    description: string;

    
    permissions: ResponsePermissionDto[];

}

