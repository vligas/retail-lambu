import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PLANTILLA_ESCALA',
})
export class MaPlantillaEscala extends ExtendedModel<MaPlantillaEscala> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CODIGO: string;

	@Column
	@ProtectedColumn
	CS_DESCRIPCION: string;
}