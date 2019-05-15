import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_Version',
})
export class MaVersion extends ExtendedModel<MaVersion> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Version: string;

	@Column
	@ProtectedColumn
	Actualizacion: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}