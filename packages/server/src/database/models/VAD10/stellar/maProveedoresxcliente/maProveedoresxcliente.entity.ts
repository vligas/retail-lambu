import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROVEEDORESxCLIENTE',
})
export class MaProveedoresxcliente extends ExtendedModel<MaProveedoresxcliente> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_codcliente: string;

	@Column
	@ProtectedColumn
	cu_codproveedor: string;

	@Column
	@ProtectedColumn
	cs_codusuario: string;

	@Column
	@ProtectedColumn
	ds_fechaingreso: Date;

	@Column
	@ProtectedColumn
	ds_fechamodificacion: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}