import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_COMPRAS',
})
export class TrPendCompras extends ExtendedModel<TrPendCompras> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_LOCALIDAD: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_STATUS: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CONCEPTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}