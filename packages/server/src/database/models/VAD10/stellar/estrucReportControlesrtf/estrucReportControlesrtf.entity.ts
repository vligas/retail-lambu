import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ESTRUC_REPORT_CONTROLESRTF',
})
export class EstrucReportControlesrtf extends ExtendedModel<EstrucReportControlesrtf> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_TIPODOC: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_NUMEROCONTROL: string;

	@Column
	@ProtectedColumn
	CS_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	CS_CADENACONTROL: string;
}