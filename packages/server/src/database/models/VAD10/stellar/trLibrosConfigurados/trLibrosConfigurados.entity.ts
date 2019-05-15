import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_LIBROS_CONFIGURADOS',
})
export class TrLibrosConfigurados extends ExtendedModel<TrLibrosConfigurados> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	CS_CAMPOTABLA: string;

	@Column
	@ProtectedColumn
	CS_CAMPORPT: string;

	@Column
	@ProtectedColumn
	CS_CAMPOMOSTRAR: string;

	@Column
	@ProtectedColumn
	NS_TIPOCAMPO: number;

	@Column
	@ProtectedColumn
	NS_ORDEN: number;

	@Column
	@ProtectedColumn
	BS_TOTALIZA: boolean;

	@Column
	@ProtectedColumn
	BS_AUTOAJUSTAR: boolean;

	@Column
	@ProtectedColumn
	NS_ANCHO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}