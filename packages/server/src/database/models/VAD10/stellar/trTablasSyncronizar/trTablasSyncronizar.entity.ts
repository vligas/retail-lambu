import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_TABLAS_SYNCRONIZAR',
})
export class TrTablasSyncronizar extends ExtendedModel<TrTablasSyncronizar> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CU_CODSUCURSAL: string;

	@Column
	@ProtectedColumn
	cu_codtablassyncronizar: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}