import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REGLASDENEGOCIO_MODULOS',
})
export class MaReglasdenegocioModulos extends ExtendedModel<MaReglasdenegocioModulos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: string;

	@Column
	@ProtectedColumn
	DescripcionResourceID: string;

	@Column
	@ProtectedColumn
	Descripcion: string;
}