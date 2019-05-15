import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_DOCUMENTOSFISCAL_NOIMP',
})
export class TrDocumentosfiscalNoimp extends ExtendedModel<TrDocumentosfiscalNoimp> {
	protectedTable = true

	@Column
	@ProtectedColumn
	usuario: string;

	@Column
	@ProtectedColumn
	localidad: string;

	@Column
	@ProtectedColumn
	documento: string;

	@Column
	@ProtectedColumn
	concepto: string;

	@Column
	@ProtectedColumn
	fechahora: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}