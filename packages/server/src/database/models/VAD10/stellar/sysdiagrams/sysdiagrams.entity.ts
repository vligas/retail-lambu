import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'sysdiagrams',
})
export class Sysdiagrams extends ExtendedModel<Sysdiagrams> {
	protectedTable = true

	@Column
	@ProtectedColumn
	name: string;

	@Column
	@ProtectedColumn
	principal_id: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	diagram_id: number;

	@Column
	@ProtectedColumn
	version: number;
}