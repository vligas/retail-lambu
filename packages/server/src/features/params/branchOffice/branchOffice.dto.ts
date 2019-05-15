import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { number, strict } from 'joi';


export class ResponseAllBranchOfficeDto {

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

