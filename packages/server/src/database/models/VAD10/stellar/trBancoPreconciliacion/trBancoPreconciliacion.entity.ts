import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_BANCO_PRECONCILIACION',
})
export class TrBancoPreconciliacion extends ExtendedModel<TrBancoPreconciliacion> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documentoint: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_concepto: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_ncuenta: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codbanco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}