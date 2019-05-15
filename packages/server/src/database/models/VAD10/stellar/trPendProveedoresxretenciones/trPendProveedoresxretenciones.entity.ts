import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PROVEEDORESxRETENCIONES',
})
export class TrPendProveedoresxretenciones extends ExtendedModel<TrPendProveedoresxretenciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CU_PROVEEDOR: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CU_RETENCION: string;

	@Column
	@ProtectedColumn
	CU_TIPO_CAMBIO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}