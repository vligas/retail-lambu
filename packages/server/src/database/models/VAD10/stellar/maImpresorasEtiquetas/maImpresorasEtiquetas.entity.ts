import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_IMPRESORAS_ETIQUETAS',
})
export class MaImpresorasEtiquetas extends ExtendedModel<MaImpresorasEtiquetas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cCodigo: string;

	@Column
	@ProtectedColumn
	cDescripcion: string;

	@Column
	@ProtectedColumn
	bIngreso: boolean;

	@Column
	@ProtectedColumn
	fFechaIngreso: Date;

	@Column
	@ProtectedColumn
	cUsuario: string;
}