import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROVEEDORES_CONVENIO',
})
export class MaProveedoresConvenio extends ExtendedModel<MaProveedoresConvenio> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoProveedor: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoDescuento: string;

	@Column
	@ProtectedColumn
	nu_porcentaje: number;

	@Column
	@ProtectedColumn
	nu_orden: number;

	@Column
	@ProtectedColumn
	nu_presupuesto: number;
}