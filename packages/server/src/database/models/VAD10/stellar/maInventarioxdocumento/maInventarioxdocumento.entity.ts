import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_INVENTARIOxDOCUMENTO',
})
export class MaInventarioxdocumento extends ExtendedModel<MaInventarioxdocumento> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CONCEPTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_DOCUMENTO_ORIGEN: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CONCEPTO_ORIGEN: string;

	@Column
	@ProtectedColumn
	CS_ESTATUS: string;
}