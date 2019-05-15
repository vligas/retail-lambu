import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_HISTORICO_IMPUESTO',
})
export class MaHistoricoImpuesto extends ExtendedModel<MaHistoricoImpuesto> {
	protectedTable = true

	@Column
	@ProtectedColumn
	fechaFin: Date;

	@Column
	@ProtectedColumn
	impuestoGeneral: number;

	@Column
	@ProtectedColumn
	impuestoReducido: number;

	@Column
	@ProtectedColumn
	impuestoAdicional: number;
}