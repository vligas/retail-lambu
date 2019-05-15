import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONCEPTOS_XML',
})
export class MaConceptosXml extends ExtendedModel<MaConceptosXml> {
	protectedTable = true

	@Column
	@ProtectedColumn
	bdd: string;

	@Column
	@ProtectedColumn
	cod_stellar: string;

	@Column
	@ProtectedColumn
	cod_seniat: string;

	@Column
	@ProtectedColumn
	servidor: string;
}