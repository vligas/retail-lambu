import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_SUBIDA_ARCHIVO',
})
export class MaSubidaArchivo extends ExtendedModel<MaSubidaArchivo> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDSUBIDA: string;

	@Column
	@ProtectedColumn
	C_NOMBRE_ARCHIVO: string;

	@Column
	@ProtectedColumn
	F_FECHA: Date;
}