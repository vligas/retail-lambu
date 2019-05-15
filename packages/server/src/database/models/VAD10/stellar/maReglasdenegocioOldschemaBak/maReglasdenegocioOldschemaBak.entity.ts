import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REGLASDENEGOCIO_OLDSCHEMA_BAK',
})
export class MaReglasdenegocioOldschemaBak extends ExtendedModel<MaReglasdenegocioOldschemaBak> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CAMPO: string;

	@Column
	@ProtectedColumn
	VALOR: string;
}