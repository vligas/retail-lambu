import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DENOMINA_RES_INGRESOS',
})
export class MaDenominaResIngresos extends ExtendedModel<MaDenominaResIngresos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_denominacion: string;

	@Column
	@ProtectedColumn
	cs_tipo: string;

	@Column
	@ProtectedColumn
	cs_descri: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}