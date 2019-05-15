import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRODXPROV',
})
export class MaProdxprov extends ExtendedModel<MaProdxprov> {
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
	add_date: Date;

	@Column
	@ProtectedColumn
	update_date: Date;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column
	@ProtectedColumn
	B_PREFERENCIAL: number;

	@Column
	@ProtectedColumn
	ESTATUS: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}