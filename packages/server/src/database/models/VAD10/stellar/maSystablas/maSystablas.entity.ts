import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_SYSTABLAS',
})
export class MaSystablas extends ExtendedModel<MaSystablas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	TABLA: string;

	@Column
	@ProtectedColumn
	CAMPO: string;

	@Column
	@ProtectedColumn
	TIPO: string;

	@Column
	@ProtectedColumn
	LONGITUD: number;

	@Column
	@ProtectedColumn
	VALOR: string;

	@Column
	@ProtectedColumn
	NULO: boolean;
}