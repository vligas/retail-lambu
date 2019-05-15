import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCO_CONFIG',
})
export class MaBancoConfig extends ExtendedModel<MaBancoConfig> {
	protectedTable = true

	@Column
	@ProtectedColumn
	n_MONTOMAX: number;

	@Column
	@ProtectedColumn
	n_DEBITOBAN: number;

	@Column
	@ProtectedColumn
	n_DIF_MBAN: number;

	@Column
	@ProtectedColumn
	n_DIF_PBAN: number;

	@Column
	@ProtectedColumn
	n_DIF_OPBAN: number;
}