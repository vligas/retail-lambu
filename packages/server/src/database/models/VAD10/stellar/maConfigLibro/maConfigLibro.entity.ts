import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONFIG_LIBRO',
})
export class MaConfigLibro extends ExtendedModel<MaConfigLibro> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_CAMPO: string;

	@Column
	@ProtectedColumn
	CS_CAMPOTABLA: string;

	@Column
	@ProtectedColumn
	CS_CAMPORPT: string;

	@Column
	@ProtectedColumn
	NS_TIPOCAMPO: number;

	@Column
	@ProtectedColumn
	NS_POSICION: number;

	@Column
	@ProtectedColumn
	BS_TOTALIZA: boolean;

	@Column
	@ProtectedColumn
	BS_VENTAS: number;

	@Column
	@ProtectedColumn
	NS_ORDEN: number;

	@Column
	@ProtectedColumn
	NS_ANCHO: number;
}