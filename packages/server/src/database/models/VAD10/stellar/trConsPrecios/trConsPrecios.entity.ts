import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_CONS_PRECIOS',
})
export class TrConsPrecios extends ExtendedModel<TrConsPrecios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	N_LINEA: number;

	@Column
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	C_CODARTICULO: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	c_modelo: string;

	@Column
	@ProtectedColumn
	N_COSTOACT: number;

	@Column
	@ProtectedColumn
	N_DESC1: number;

	@Column
	@ProtectedColumn
	N_DESC2: number;

	@Column
	@ProtectedColumn
	N_DESC3: number;

	@Column
	@ProtectedColumn
	N_COSTOFIN: number;

	@Column
	@ProtectedColumn
	C_DEPARTAMENTO: string;

	@Column
	@ProtectedColumn
	C_GRUPO: string;

	@Column
	@ProtectedColumn
	C_SUBGRUPO: string;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column
	@ProtectedColumn
	C_CAMXREP: string;

	@Column
	@ProtectedColumn
	N_PRECIO_REP1: number;

	@Column
	@ProtectedColumn
	N_PRECIO_REP2: number;

	@Column
	@ProtectedColumn
	N_PRECIO_REP3: number;

	@Column
	@ProtectedColumn
	N_COSTOREP: number;
}