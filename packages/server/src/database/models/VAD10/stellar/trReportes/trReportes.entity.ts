import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_REPORTES',
})
export class TrReportes extends ExtendedModel<TrReportes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CodPlantilla: number;

	@Column({primaryKey: true})
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
	Longitud: number;

	@Column
	@ProtectedColumn
	Decimales: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	Tabla: string;

	@Column
	@ProtectedColumn
	Predeterminado: string;

	@Column
	@ProtectedColumn
	Separador: string;

	@Column
	@ProtectedColumn
	Aplicar_Relleno: boolean;

	@Column
	@ProtectedColumn
	Relleno: string;

	@Column
	@ProtectedColumn
	Aplicar_Formato: boolean;

	@Column
	@ProtectedColumn
	Formato: string;

	@Column
	@ProtectedColumn
	Alinear: boolean;

	@Column
	@ProtectedColumn
	Ordenar: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}