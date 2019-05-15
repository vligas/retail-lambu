import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DOCMENTOxSEL_IMPRESION',
})
export class MaDocmentoxselImpresion extends ExtendedModel<MaDocmentoxselImpresion> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documento: string;

	@Column
	@ProtectedColumn
	n_Sel_impresion: number;
}