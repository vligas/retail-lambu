import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ALERTAGRID_PROCESOS',
})
export class MaAlertagridProcesos extends ExtendedModel<MaAlertagridProcesos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Proceso: string;

	@Column
	@ProtectedColumn
	c_Descripcion: string;

	@Column
	@ProtectedColumn
	c_D_ResourceID: number;
}