import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REPORTES',
})
export class MaReportes extends ExtendedModel<MaReportes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CodPlantilla: number;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	TipoNomina: string;

	@Column
	@ProtectedColumn
	Ubicacion: string;

	@Column
	@ProtectedColumn
	Archivo: string;

	@Column
	@ProtectedColumn
	Reescribir: boolean;

	@Column
	@ProtectedColumn
	Fecha: boolean;

	@Column
	@ProtectedColumn
	Servidor: string;

	@Column
	@ProtectedColumn
	BaseDatos: string;
}