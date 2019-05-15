import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_VENTAS',
})
export class MaVentas extends ExtendedModel<MaVentas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_ORGANIZACION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CONCEPTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	d_FECHA: Date;

	@Column
	@ProtectedColumn
	c_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	c_direccion: string;

	@Column
	@ProtectedColumn
	c_rif: string;

	@Column
	@ProtectedColumn
	c_nit: string;

	@Column
	@ProtectedColumn
	c_telefono: string;

	@Column
	@ProtectedColumn
	c_status: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODCLIENTE: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	c_CODMONEDA: string;

	@Column
	@ProtectedColumn
	n_FACTORCAMBIO: number;

	@Column
	@ProtectedColumn
	n_DESCUENTO: number;

	@Column
	@ProtectedColumn
	c_OBSERVACION: string;

	@Column
	@ProtectedColumn
	c_RELACION: string;

	@Column
	@ProtectedColumn
	c_CODVENDEDOR: string;

	@Column
	@ProtectedColumn
	d_fecha_recepcion: Date;

	@Column
	@ProtectedColumn
	NS_BASE_RETENCION: number;

	@Column
	@ProtectedColumn
	NS_RETENCION: number;

	@Column
	@ProtectedColumn
	N_SUBTOTAL: number;

	@Column
	@ProtectedColumn
	N_IMPUESTO: number;

	@Column
	@ProtectedColumn
	NU_MONTO_SERVICIO: number;

	@Column
	@ProtectedColumn
	N_TOTAL: number;

	@Column
	@ProtectedColumn
	NU_MONTO_CANCELADO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODDEPOSITO: string;

	@Column
	@ProtectedColumn
	n_baseimp: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	c_orden_compra: string;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column
	@ProtectedColumn
	cu_vendedor_cod: string;

	@Column
	@ProtectedColumn
	cu_codafiliado: string;

	@Column
	@ProtectedColumn
	N_VUELTO: number;

	@Column
	@ProtectedColumn
	NU_MONTO_VUELTO: number;

	@Column
	@ProtectedColumn
	cs_comprobanteContable: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	CS_NUMERO_TRANSFERENCIA: string;

	@Column
	@ProtectedColumn
	CS_CODUNIDAD: string;

	@Column
	@ProtectedColumn
	bu_impresa: boolean;

	@Column
	@ProtectedColumn
	CS_NUMTRANSF_DESTINO: string;

	@Column
	@ProtectedColumn
	PackingBoolean: boolean;

	@Column
	@ProtectedColumn
	dFechaRegistro: Date;
}