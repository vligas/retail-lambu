import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_RTF_ESC',
})
export class MaRtfEsc extends ExtendedModel<MaRtfEsc> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codigo_Rtf: string;

	@Column
	@ProtectedColumn
	cs_Clave_rtf: string;

	@Column
	@ProtectedColumn
	cs_descripcion_rtf: string;

	@Column
	@ProtectedColumn
	bs_directopuerto: boolean;
}