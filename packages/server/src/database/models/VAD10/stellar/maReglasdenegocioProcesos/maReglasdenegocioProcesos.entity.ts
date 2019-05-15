import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REGLASDENEGOCIO_PROCESOS',
})
export class MaReglasdenegocioProcesos extends ExtendedModel<MaReglasdenegocioProcesos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDModulo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	IDProceso: string;

	@Column
	@ProtectedColumn
	DescripcionResourceID: string;

	@Column
	@ProtectedColumn
	Descripcion: string;
}