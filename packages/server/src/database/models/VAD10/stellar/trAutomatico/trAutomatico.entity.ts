import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_Automatico',
})
export class TrAutomatico extends ExtendedModel<TrAutomatico> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDDeAutomatico: number;

	@Column
	@ProtectedColumn
	IDDeCuenta: number;

	@Column
	@ProtectedColumn
	Codigo: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	Tipo: boolean;

	@Column
	@ProtectedColumn
	Formula: string;

	@Column
	@ProtectedColumn
	CentroCosto: string;

	@Column
	@ProtectedColumn
	DescripcionMov: string;
}