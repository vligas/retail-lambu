import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_RECEPCION',
})
export class TrRecepcion extends ExtendedModel<TrRecepcion> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_LINEA: number;

	@Column
	@ProtectedColumn
	c_CONCEPTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	c_DEPOSITO: string;

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
	n_SUBTOTAL: number;

	@Column
	@ProtectedColumn
	c_TIPOMOV: string;

	@Column
	@ProtectedColumn
	n_cant_teorica: number;

	@Column
	@ProtectedColumn
	n_cant_diferencia: number;

	@Column
	@ProtectedColumn
	N_IMPUESTO: number;

	@Column
	@ProtectedColumn
	N_TOTAL: number;

	@Column
	@ProtectedColumn
	N_PRECIO: number;

	@Column
	@ProtectedColumn
	N_PRECIO_ORIGINAL: number;

	@Column
	@ProtectedColumn
	STATUS: string;

	@Column
	@ProtectedColumn
	DEC: number;

	@Column
	@ProtectedColumn
	N_ID: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	ns_CantidadEmpaque: number;

	@Column
	@ProtectedColumn
	c_documento_origen: string;

	@Column
	@ProtectedColumn
	c_tipodoc_origen: string;

	@Column
	@ProtectedColumn
	ns_CantidaddelDocumentoOrigen: number;

	@Column
	@ProtectedColumn
	n_UnidadesFactura: number;

	@Column
	@ProtectedColumn
	n_EmpaquesFactura: number;
}