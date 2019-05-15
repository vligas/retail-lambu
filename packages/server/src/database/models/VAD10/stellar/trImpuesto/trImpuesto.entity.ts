import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_IMPUESTO',
})
export class TrImpuesto extends ExtendedModel<TrImpuesto> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODIMPUESTO: string;

	@Column
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	n_VALOR: number;
}