import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRODUCTOS_GENERICOS',
})
export class MaProductosGenericos extends ExtendedModel<MaProductosGenericos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cCodigo: string;

	@Column
	@ProtectedColumn
	cDescripcion: string;

	@Column
	@ProtectedColumn
	cNota: string;
}