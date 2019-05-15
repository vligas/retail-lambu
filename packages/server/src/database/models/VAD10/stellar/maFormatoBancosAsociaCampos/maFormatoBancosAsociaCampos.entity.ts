import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_FORMATO_BANCOS_ASOCIA_CAMPOS',
})
export class MaFormatoBancosAsociaCampos extends ExtendedModel<MaFormatoBancosAsociaCampos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_campoConsulta: string;

	@Column
	@ProtectedColumn
	cu_nombreParaHumanos: string;
}