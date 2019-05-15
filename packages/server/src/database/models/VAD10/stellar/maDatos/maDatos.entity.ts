import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DATOS',
})
export class MaDatos extends ExtendedModel<MaDatos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Nombre: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	Tipo: string;

	@Column
	@ProtectedColumn
	Tabla: string;
}