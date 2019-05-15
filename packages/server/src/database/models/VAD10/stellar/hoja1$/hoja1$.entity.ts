import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'Hoja1$',
})
export class Hoja1$ extends ExtendedModel<Hoja1$> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CODIGO: string;

	@Column
	@ProtectedColumn
	DESCRIPCION: string;

	@Column
	@ProtectedColumn
	MODELO: string;

	@Column
	@ProtectedColumn
	DEPARTAMENTO: string;

	@Column
	@ProtectedColumn
	GRUPO: string;

	@Column
	@ProtectedColumn
	TIPO: string;

	@Column
	@ProtectedColumn
	UBICACIÓN: string;

	@Column
	@ProtectedColumn
	STOCK: string;

	@Column
	@ProtectedColumn
	COSTO_ACT: string;

	@Column
	@ProtectedColumn
	PRECIO1: string;

	@Column
	@ProtectedColumn
	PRECIO2: string;

	@Column
	@ProtectedColumn
	PRECIO3: string;

	@Column
	@ProtectedColumn
	F13: string;

	@Column
	@ProtectedColumn
	F14: string;

	@Column
	@ProtectedColumn
	F15: string;

	@Column
	@ProtectedColumn
	F16: string;

	@Column
	@ProtectedColumn
	F17: string;

	@Column
	@ProtectedColumn
	F18: string;
}