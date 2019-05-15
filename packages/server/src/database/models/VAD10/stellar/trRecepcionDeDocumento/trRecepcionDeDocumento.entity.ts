import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_RECEPCION_DE_DOCUMENTO',
})
export class TrRecepcionDeDocumento extends ExtendedModel<TrRecepcionDeDocumento> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_documento: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	ds_fecha: Date;

	@Column
	@ProtectedColumn
	cu_documentoRecibido: string;

	@Column
	@ProtectedColumn
	cu_documentoRecibido_concepto: string;
}