import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PARTES',
})
export class TrPendPartes extends ExtendedModel<TrPendPartes> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_Codigo: string;

	@Column
	@ProtectedColumn
	c_Parte: string;

	@Column
	@ProtectedColumn
	n_Cantidad: number;

	@Column
	@ProtectedColumn
	TipoCambio: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}