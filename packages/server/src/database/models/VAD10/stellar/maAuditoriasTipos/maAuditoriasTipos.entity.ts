import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_AUDITORIAS_TIPOS',
})
export class MaAuditoriasTipos extends ExtendedModel<MaAuditoriasTipos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	DescResourceID: number;
}