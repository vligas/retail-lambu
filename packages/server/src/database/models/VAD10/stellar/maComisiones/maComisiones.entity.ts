import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMISIONES',
})
export class MaComisiones extends ExtendedModel<MaComisiones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_Codigo: string;

	@Column
	@ProtectedColumn
	C_Descripcion: string;
}