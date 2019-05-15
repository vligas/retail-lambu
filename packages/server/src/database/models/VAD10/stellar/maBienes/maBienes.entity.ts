import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_Bienes',
})
export class MaBienes extends ExtendedModel<MaBienes> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDDeActivo: number;

	@Column
	@ProtectedColumn
	Codigo: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	Fecha: Date;

	@Column
	@ProtectedColumn
	Monto: number;

	@Column
	@ProtectedColumn
	ValorSalvamento: number;

	@Column
	@ProtectedColumn
	VidaUtil: number;

	@Column
	@ProtectedColumn
	Depreciacion: number;

	@Column
	@ProtectedColumn
	Departamento: string;
}