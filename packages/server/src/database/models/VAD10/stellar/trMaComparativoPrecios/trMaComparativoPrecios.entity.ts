import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_MA_COMPARATIVO_PRECIOS',
})
export class TrMaComparativoPrecios extends ExtendedModel<TrMaComparativoPrecios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	Alias: string;

	@Column
	@ProtectedColumn
	Precio: number;

	@Column
	@ProtectedColumn
	Columna: number;

	@Column
	@ProtectedColumn
	Linea: number;
}