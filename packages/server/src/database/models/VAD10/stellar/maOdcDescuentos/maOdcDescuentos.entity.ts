import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ODC_DESCUENTOS',
})
export class MaOdcDescuentos extends ExtendedModel<MaOdcDescuentos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_documento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoDescuento: string;

	@Column
	@ProtectedColumn
	nu_montoDescuento: number;
}