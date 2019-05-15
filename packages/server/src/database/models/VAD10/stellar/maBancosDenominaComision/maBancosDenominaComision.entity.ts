import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCOS_DENOMINA_COMISION',
})
export class MaBancosDenominaComision extends ExtendedModel<MaBancosDenominaComision> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_banco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_denomina: string;

	@Column
	@ProtectedColumn
	ns_porcentaje: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ns_concepto: number;

	@Column
	@ProtectedColumn
	ns_PorcOtroBanco: string;
}