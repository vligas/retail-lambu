import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROVEEDORESxRETENCIONES',
})
export class MaProveedoresxretenciones extends ExtendedModel<MaProveedoresxretenciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CU_PROVEEDOR: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CU_RETENCION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}