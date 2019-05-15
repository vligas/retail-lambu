import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMPRAS_DESCUENTOS',
})
export class MaComprasDescuentos extends ExtendedModel<MaComprasDescuentos> {
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