import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TMP_PROGRAMACIONPAGO_MASIVA',
})
export class TmpProgramacionpagoMasiva extends ExtendedModel<TmpProgramacionpagoMasiva> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CodProg: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Factura: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_TipoDocOrigen: string;

	@Column
	@ProtectedColumn
	n_Desc1: number;

	@Column
	@ProtectedColumn
	n_Desc2: number;

	@Column
	@ProtectedColumn
	n_Desc3: number;
}