import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CORRELATIVOS',
})
export class MaCorrelativos extends ExtendedModel<MaCorrelativos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_Campo: string;

	@Column
	@ProtectedColumn
	cu_Descripcion: string;

	@Column
	@ProtectedColumn
	nu_Valor: number;

	@Column
	@ProtectedColumn
	cu_Formato: string;
}