import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_RECEPCION_DE_DOCUMENTO',
})
export class MaRecepcionDeDocumento extends ExtendedModel<MaRecepcionDeDocumento> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_documento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	cs_codusuario: string;

	@Column
	@ProtectedColumn
	ds_fecha: Date;

	@Column
	@ProtectedColumn
	cu_observacion: string;

	@Column
	@ProtectedColumn
	cu_codproveedor: string;
}