import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_ODC_DESCUENTOS',
})
export class TrOdcDescuentos extends ExtendedModel<TrOdcDescuentos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	nu_linea: number;

	@Column
	@ProtectedColumn
	nu_montoDescuento: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoDescuento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_documento: string;

	@Column
	@ProtectedColumn
	nu_porcentaje: number;
}