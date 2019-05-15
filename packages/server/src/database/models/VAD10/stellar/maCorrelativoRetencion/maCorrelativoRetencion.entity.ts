import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CORRELATIVO_RETENCION',
})
export class MaCorrelativoRetencion extends ExtendedModel<MaCorrelativoRetencion> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_CAMPO: string;

	@Column
	@ProtectedColumn
	CS_DESCRIPCION: string;
}