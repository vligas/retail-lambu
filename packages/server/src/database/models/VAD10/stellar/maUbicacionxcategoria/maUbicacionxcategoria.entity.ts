import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_UBICACIONxCATEGORIA',
})
export class MaUbicacionxcategoria extends ExtendedModel<MaUbicacionxcategoria> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_Deposito: string;

	@Column
	@ProtectedColumn
	cu_Departamento: string;

	@Column
	@ProtectedColumn
	cu_Grupo: string;

	@Column
	@ProtectedColumn
	cu_SubGrupo: string;

	@Column
	@ProtectedColumn
	cu_Mascara: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}