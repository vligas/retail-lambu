import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CORRIDAS_AGENTE_ADM',
})
export class MaCorridasAgenteAdm extends ExtendedModel<MaCorridasAgenteAdm> {
	protectedTable = true

	@Column
	@ProtectedColumn
	FS_FECHA: Date;

	@Column
	@ProtectedColumn
	CS_ARCHIVO_CORRIDA: string;
}