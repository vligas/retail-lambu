import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_COMISIONES',
})
export class TrComisiones extends ExtendedModel<TrComisiones> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_Codigo: string;

	@Column
	@ProtectedColumn
	c_Tipo: string;

	@Column
	@ProtectedColumn
	n_RangoMinimo: number;

	@Column
	@ProtectedColumn
	n_RangoMaximo: number;

	@Column
	@ProtectedColumn
	c_Concepto: string;

	@Column
	@ProtectedColumn
	n_Porcentaje: number;

	@Column
	@ProtectedColumn
	n_Monto: number;
}