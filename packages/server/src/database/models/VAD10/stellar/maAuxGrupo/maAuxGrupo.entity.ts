import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_AUX_GRUPO',
})
export class MaAuxGrupo extends ExtendedModel<MaAuxGrupo> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_GRUPO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_TIPO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}