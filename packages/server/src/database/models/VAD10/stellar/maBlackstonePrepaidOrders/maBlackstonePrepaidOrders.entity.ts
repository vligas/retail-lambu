import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BLACKSTONE_PREPAID_ORDERS',
})
export class MaBlackstonePrepaidOrders extends ExtendedModel<MaBlackstonePrepaidOrders> {
	protectedTable = true

	@Column
	@ProtectedColumn
	StellarOrderID: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	TicketNumber: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ServiceType: number;

	@Column
	@ProtectedColumn
	Status: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}