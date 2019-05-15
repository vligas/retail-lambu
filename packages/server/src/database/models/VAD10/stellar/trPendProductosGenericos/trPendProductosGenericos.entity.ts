import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PRODUCTOS_GENERICOS',
})
export class TrPendProductosGenericos extends ExtendedModel<TrPendProductosGenericos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	cCodigo: string;

	@Column
	@ProtectedColumn
	cDescripcion: string;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column
	@ProtectedColumn
	cNota: string;
}