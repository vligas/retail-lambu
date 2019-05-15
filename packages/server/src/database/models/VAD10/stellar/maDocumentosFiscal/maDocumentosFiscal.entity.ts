import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DOCUMENTOS_FISCAL',
})
export class MaDocumentosFiscal extends ExtendedModel<MaDocumentosFiscal> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_DocumentoStellar: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_DocumentoFiscal: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_DocumentoTipo: string;

	@Column
	@ProtectedColumn
	cu_Localidad: string;

	@Column
	@ProtectedColumn
	cu_SerialImpresora: string;

	@Column
	@ProtectedColumn
	cu_ZFiscal: string;
}