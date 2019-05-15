import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_ODC',
})
export class TrPendOdc extends ExtendedModel<TrPendOdc> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	C_LOCALIDAD: string;

	@Column
	@ProtectedColumn
	C_STATUS: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}