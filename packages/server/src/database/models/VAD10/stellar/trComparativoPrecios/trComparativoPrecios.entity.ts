import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_COMPARATIVO_PRECIOS',
})
export class TrComparativoPrecios extends ExtendedModel<TrComparativoPrecios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	codProducto: string;

	@Column
	@ProtectedColumn
	Linea: number;

	@Column
	@ProtectedColumn
	PrecioProducto: number;
}