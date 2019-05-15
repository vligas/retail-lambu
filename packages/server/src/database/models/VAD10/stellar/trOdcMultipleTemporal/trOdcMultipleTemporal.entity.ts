import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_ODC_MULTIPLE_TEMPORAL',
})
export class TrOdcMultipleTemporal extends ExtendedModel<TrOdcMultipleTemporal> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	c_LINEA: number;

	@Column
	@ProtectedColumn
	c_CODARTICULO: string;

	@Column
	@ProtectedColumn
	n_CANTIDAD: number;

	@Column
	@ProtectedColumn
	n_COSTO: number;

	@Column
	@ProtectedColumn
	n_subtotal: number;

	@Column
	@ProtectedColumn
	n_impuesto: number;

	@Column
	@ProtectedColumn
	n_total: number;

	@Column
	@ProtectedColumn
	n_CANT_RECIBIDA: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp1: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp2: number;

	@Column
	@ProtectedColumn
	c_codprincipal: string;

	@Column
	@ProtectedColumn
	n_costooriginal: number;

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
	C_CAMXREP: boolean;

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

	@Column
	@ProtectedColumn
	C_MONEDA: string;

	@Column
	@ProtectedColumn
	N_DECIMALES: number;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	n_descuentoespecifico: number;

	@Column
	@ProtectedColumn
	n_descuentogeneral: number;

	@Column
	@ProtectedColumn
	ns_cantidadempaque: number;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	n_id: number;

	@Column
	@ProtectedColumn
	equipoUsar: string;
}