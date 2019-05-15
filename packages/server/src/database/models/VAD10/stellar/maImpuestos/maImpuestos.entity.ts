import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_IMPUESTOS',
})
export class MaImpuestos extends ExtendedModel<MaImpuestos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODIMPUESTO: string;

	@Column
	@ProtectedColumn
	c_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	c_IMPCOMPRANAC: number;

	@Column
	@ProtectedColumn
	c_IMPCOMPRAINT: number;

	@Column
	@ProtectedColumn
	c_IMPVENTANAC: number;

	@Column
	@ProtectedColumn
	c_IMPVENTAINT: number;

	@Column
	@ProtectedColumn
	c_TIPOIMP: string;
}