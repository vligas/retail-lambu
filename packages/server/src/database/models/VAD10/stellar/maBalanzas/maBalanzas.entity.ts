import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BALANZAS',
})
export class MaBalanzas extends ExtendedModel<MaBalanzas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	C_PREFIJO: number;

	@Column
	@ProtectedColumn
	N_CONSECUTIVO: number;

	@Column
	@ProtectedColumn
	C_MARCA: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}