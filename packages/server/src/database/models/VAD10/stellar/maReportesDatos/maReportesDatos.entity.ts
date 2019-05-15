import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REPORTES_DATOS',
})
export class MaReportesDatos extends ExtendedModel<MaReportesDatos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	nombre: string;

	@Column
	@ProtectedColumn
	descripcion: string;

	@Column
	@ProtectedColumn
	tipo: string;

	@Column
	@ProtectedColumn
	tabla: string;
}