import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DEPOPROD',
})
export class MaDepoprod extends ExtendedModel<MaDepoprod> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_coddeposito: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codarticulo: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	n_cantidad: number;

	@Column
	@ProtectedColumn
	n_cant_comprometida: number;

	@Column
	@ProtectedColumn
	n_cant_ordenada: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}