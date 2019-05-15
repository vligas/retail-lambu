import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRESENTACION',
})
export class MaPresentacion extends ExtendedModel<MaPresentacion> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_PRESENTACION: string;
}