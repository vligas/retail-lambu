import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCOS',
})
export class MaBancos extends ExtendedModel<MaBancos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODIGO: string;

	@Column
	@ProtectedColumn
	c_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	c_GRUPO: string;

	@Column
	@ProtectedColumn
	c_OBSERVACIO: string;

	@Column
	@ProtectedColumn
	N_IDB: number;

	@Column
	@ProtectedColumn
	bs_verificacionoperaciones_especiales: boolean;

	@Column
	@ProtectedColumn
	cs_mensaje: string;

	@Column
	@ProtectedColumn
	ns_codigooperacion: string;

	@Column
	@ProtectedColumn
	cs_rtfcheque: string;

	@Column
	@ProtectedColumn
	cs_codigobanco_che: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	cu_FormatoArchivo: string;

	@Column
	@ProtectedColumn
	cu_FormatoArchivoMismoBanco: string;

	@Column
	@ProtectedColumn
	cu_FormatoArchivoOtrosBancos: string;

	@Column
	@ProtectedColumn
	cu_tipoArchivoConciliacion: string;

	@Column
	@ProtectedColumn
	cu_separadorArchivoConciliacion: string;

	@Column
	@ProtectedColumn
	cu_campoTipo: string;

	@Column
	@ProtectedColumn
	cu_campoDocumento: string;

	@Column
	@ProtectedColumn
	cu_campoDetalle: string;

	@Column
	@ProtectedColumn
	cu_campoMonto: string;

	@Column
	@ProtectedColumn
	cu_campoFecha: string;
}