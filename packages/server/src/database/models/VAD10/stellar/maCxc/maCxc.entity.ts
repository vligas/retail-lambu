import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CXC',
})
export class MaCxc extends ExtendedModel<MaCxc> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_Documento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_Relacion: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_Codigo: string;

	@Column
	@ProtectedColumn
	C_localidad: string;

	@Column
	@ProtectedColumn
	C_usuario: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_concepto: string;

	@Column
	@ProtectedColumn
	c_detalle: string;

	@Column
	@ProtectedColumn
	c_observacion: string;

	@Column
	@ProtectedColumn
	f_fechae: Date;

	@Column
	@ProtectedColumn
	f_fechav: Date;

	@Column
	@ProtectedColumn
	n_impuesto: number;

	@Column
	@ProtectedColumn
	n_bimpuesto: number;

	@Column
	@ProtectedColumn
	n_total: number;

	@Column
	@ProtectedColumn
	n_PagadoImp: number;

	@Column
	@ProtectedColumn
	n_Pagado: number;

	@Column
	@ProtectedColumn
	n_retencion: number;

	@Column
	@ProtectedColumn
	n_subtotal: number;

	@Column
	@ProtectedColumn
	N_pimpuesto: number;

	@Column
	@ProtectedColumn
	N_DESCUENTO: number;

	@Column
	@ProtectedColumn
	c_codmoneda: string;

	@Column
	@ProtectedColumn
	n_factor: number;

	@Column
	@ProtectedColumn
	F_CANCELACION: Date;

	@Column
	@ProtectedColumn
	b_tipoaporte: number;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column
	@ProtectedColumn
	cs_comprobanteContable: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	cs_documento_ret: string;

	@Column
	@ProtectedColumn
	cs_comprobante_ret: string;

	@Column
	@ProtectedColumn
	ds_fecha_ret: Date;

	@Column
	@ProtectedColumn
	CS_CODUNIDAD: string;

	@Column
	@ProtectedColumn
	cs_ncontrol: string;

	@Column
	@ProtectedColumn
	cs_documento_ndc: string;

	@Column
	@ProtectedColumn
	cs_ncontrol_ndc: string;

	@Column
	@ProtectedColumn
	ds_fechaemision_nota: Date;

	@Column
	@ProtectedColumn
	cs_RelacionAnticipo: string;

	@Column
	@ProtectedColumn
	CS_NUMTRANSF_DESTINO: string;

	@Column
	@ProtectedColumn
	CS_NUMERO_TRANSFERENCIA: string;
}