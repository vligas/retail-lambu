import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_UNIDADES',
})
export class MaUnidades extends ExtendedModel<MaUnidades> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codigo: string;

	@Column
	@ProtectedColumn
	cs_descripcion: string;

	@Column
	@ProtectedColumn
	cs_grupo: string;
}