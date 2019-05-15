import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ALERTAGRID_PROCESOxALERTA',
})
export class MaAlertagridProcesoxalerta extends ExtendedModel<MaAlertagridProcesoxalerta> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Proceso: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CodAlerta: string;
}