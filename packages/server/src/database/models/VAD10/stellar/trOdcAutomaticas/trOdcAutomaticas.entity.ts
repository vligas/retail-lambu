import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_ODC_AUTOMATICAS',
})
export class TrOdcAutomaticas extends ExtendedModel<TrOdcAutomaticas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_proveedor: string;

	@Column
	@ProtectedColumn
	du_fecha: Date;
}