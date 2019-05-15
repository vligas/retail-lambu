import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_CIERRES',
})
export class TrCierres extends ExtendedModel<TrCierres> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	d_FECHA: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	c_CODMONEDA: string;

	@Column
	@ProtectedColumn
	c_CODDENOMINA: string;

	@Column
	@ProtectedColumn
	c_CODBANCO: string;

	@Column
	@ProtectedColumn
	n_FACTOR: number;

	@Column
	@ProtectedColumn
	n_CANTIDAD: number;

	@Column
	@ProtectedColumn
	n_BOLIVARES: number;

	@Column
	@ProtectedColumn
	c_TDC: string;

	@Column
	@ProtectedColumn
	c_cerrado: string;
}