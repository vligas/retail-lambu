import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BLACKSTONE_PREPAID_STATUS',
})
export class MaBlackstonePrepaidStatus extends ExtendedModel<MaBlackstonePrepaidStatus> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	StatusID: number;

	@Column
	@ProtectedColumn
	Description: string;
}