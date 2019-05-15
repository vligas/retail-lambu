import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_UBICACIONxPRODUCTO',
})
export class MaUbicacionxproducto extends ExtendedModel<MaUbicacionxproducto> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_Deposito: string;

	@Column
	@ProtectedColumn
	cu_Producto: string;

	@Column
	@ProtectedColumn
	cu_Mascara: string;

	@Column
	@ProtectedColumn
	n_Linea: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}