import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PRODXPROV',
})
export class TrPendProdxprov extends ExtendedModel<TrPendProdxprov> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codigo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codprovee: string;

	@Column
	@ProtectedColumn
	c_numero_compra: string;

	@Column
	@ProtectedColumn
	d_fecha: Date;

	@Column
	@ProtectedColumn
	n_costo: number;

	@Column
	@ProtectedColumn
	UPDATE_DATE: Date;

	@Column
	@ProtectedColumn
	ADD_DATE: Date;

	@Column
	@ProtectedColumn
	ESTATUS: number;

	@Column
	@ProtectedColumn
	B_PREFERENCIAL: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;
}