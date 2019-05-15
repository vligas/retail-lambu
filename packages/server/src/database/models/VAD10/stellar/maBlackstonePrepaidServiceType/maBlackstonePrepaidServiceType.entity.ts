import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BLACKSTONE_PREPAID_SERVICE_TYPE',
})
export class MaBlackstonePrepaidServiceType extends ExtendedModel<MaBlackstonePrepaidServiceType> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ServiceTypeID: number;

	@Column
	@ProtectedColumn
	Description: string;
}