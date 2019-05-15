import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROCESOS',
})
export class MaProcesos extends ExtendedModel<MaProcesos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	IDProceso: number;

	@Column
	@ProtectedColumn
	Proceso: string;

	@Column
	@ProtectedColumn
	Tabla: string;

	@Column
	@ProtectedColumn
	Concepto: string;

	@Column
	@ProtectedColumn
	Documento: string;

	@Column
	@ProtectedColumn
	AceptaClasificacion: number;

	@Column
	@ProtectedColumn
	IDProcesoEmisor: number;
}