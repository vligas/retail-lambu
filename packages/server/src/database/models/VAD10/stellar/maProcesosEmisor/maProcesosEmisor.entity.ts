import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROCESOS_EMISOR',
})
export class MaProcesosEmisor extends ExtendedModel<MaProcesosEmisor> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	IDProcesoEmisor: number;

	@Column
	@ProtectedColumn
	Descripcion: string;
}