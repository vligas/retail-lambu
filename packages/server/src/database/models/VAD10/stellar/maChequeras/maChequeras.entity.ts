import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CHEQUERAS',
})
export class MaChequeras extends ExtendedModel<MaChequeras> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	IDChequera: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_BANCO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CUENTA: string;

	@Column
	@ProtectedColumn
	NumDesde: number;

	@Column
	@ProtectedColumn
	NumHasta: number;

	@Column
	@ProtectedColumn
	Cantidad: number;

	@Column
	@ProtectedColumn
	Estado: string;
}