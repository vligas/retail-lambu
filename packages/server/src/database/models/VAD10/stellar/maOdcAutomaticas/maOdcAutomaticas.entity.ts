import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ODC_AUTOMATICAS',
})
export class MaOdcAutomaticas extends ExtendedModel<MaOdcAutomaticas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_proveedor: string;

	@Column
	@ProtectedColumn
	cu_diasCorrer: string;

	@Column
	@ProtectedColumn
	nu_orden: number;

	@Column
	@ProtectedColumn
	cu_forma: string;

	@Column
	@ProtectedColumn
	cu_deposito: string;

	@Column
	@ProtectedColumn
	nu_dias: number;

	@Column
	@ProtectedColumn
	nu_tipoCosto: number;

	@Column
	@ProtectedColumn
	nu_tipoPrecio: number;

	@Column
	@ProtectedColumn
	cu_localidad: string;
}