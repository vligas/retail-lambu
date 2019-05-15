import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_RTF_ESC',
})
export class TrRtfEsc extends ExtendedModel<TrRtfEsc> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigo_rtf: string;

	@Column
	@ProtectedColumn
	cs_variable_rtf: string;

	@Column
	@ProtectedColumn
	ns_tipocomando: number;

	@Column
	@ProtectedColumn
	cs_valorvariable_rtf: string;
}