
export interface RequestCreateBranchOfficeDto {

    name: string;

    location: string;

    competitorId: number;
}


export interface RequestUpdateBranchOfficeDto {

    name: string;

    location: string;
}


export interface ResponseBranchOfficeDto {

    id: number;

    name: string;

    location: string;

    competitors?: {
        id: number;
        name: string;
    };
}


export interface ResponseAllBranchOfficeDto {

    C_codigo: string;
    c_descripcion: string;
    c_direccion: string;
    c_gerente: string;
    c_subgerebte: string;
    c_telefono: string;
    c_estado: number;
    c_servidor: string;
    B_TRASMITIR: boolean;
    B_ACTVAD10: boolean;
    c_ciudad: string;
    c_nombre_cheque: string;
    cu_DireccionUltimaVersion: string;
    nu_ActualizarUltimaVersion: number;
    nu_MensajeUltimaVersion: number;
}
