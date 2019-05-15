import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PRODUCCION',
})
export class TrProduccion extends ExtendedModel<TrProduccion> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_FORMULA: string;

	@Column
	@ProtectedColumn
	N_CANTIDAD: number;

	@Column
	@ProtectedColumn
	N_MERMA: number;

	@Column
	@ProtectedColumn
	C_PRESENTA: string;

	@Column
	@ProtectedColumn
	C_CODPRODUCTO: string;

	@Column
	@ProtectedColumn
	N_COSTO: number;

	@Column
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column
	@ProtectedColumn
	B_PRODUCIR: string;

	@Column
	@ProtectedColumn
	nu_factorcosto: number;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;
}