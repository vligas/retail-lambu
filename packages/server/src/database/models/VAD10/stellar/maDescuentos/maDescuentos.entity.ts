import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DESCUENTOS',
})
export class MaDescuentos extends ExtendedModel<MaDescuentos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoDescuento: string;

	@Column
	@ProtectedColumn
	cu_descripcion: string;

	@Column
	@ProtectedColumn
	nu_tipo: number;

	@Column
	@ProtectedColumn
	nu_forma: number;

	@Column
	@ProtectedColumn
	BU_AFECTACOSTO: number;
}