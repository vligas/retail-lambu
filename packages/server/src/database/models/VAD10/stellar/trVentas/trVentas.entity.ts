import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_VENTAS',
})
export class TrVentas extends ExtendedModel<TrVentas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CONCEPTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODARTICULO: string;

	@Column
	@ProtectedColumn
	n_CANTIDAD: number;

	@Column
	@ProtectedColumn
	n_precio: number;

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
	n_CANT_VENDIDA: number;

	@Column
	@ProtectedColumn
	N_PRECIO_ORIGINAL: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	C_COMPUESTO: string;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column
	@ProtectedColumn
	n_descuentogeneral: number;

	@Column
	@ProtectedColumn
	n_descuentoespecifico: number;

	@Column
	@ProtectedColumn
	CS_CODLOCALIDAD: string;
}