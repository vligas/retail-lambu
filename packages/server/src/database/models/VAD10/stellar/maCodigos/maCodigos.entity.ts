import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CODIGOS',
})
export class MaCodigos extends ExtendedModel<MaCodigos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CodNasa: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Codigo: string;

	@Column
	@ProtectedColumn
	c_Descripcion: string;

	@Column
	@ProtectedColumn
	n_Cantidad: number;

	@Column
	@ProtectedColumn
	nu_Intercambio: number;

	@Column
	@ProtectedColumn
	nu_TipoPrecio: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}