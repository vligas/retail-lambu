import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMPRAS',
})
export class MaCompras extends ExtendedModel<MaCompras> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	d_FECHA: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CONCEPTO: string;

	@Column
	@ProtectedColumn
	c_status: string;

	@Column
	@ProtectedColumn
	c_CODPROVEEDOR: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	c_codmoneda: string;

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
	c_CODCOMPRADOR: string;

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
	N_TOTAL: number;

	@Column
	@ProtectedColumn
	C_CODDEPOSITO: string;

	@Column
	@ProtectedColumn
	n_baseimp: number;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	FACPROVEEDOR: string;

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
	cs_ncontrol: string;

	@Column
	@ProtectedColumn
	CS_CODUNIDAD: string;

	@Column
	@ProtectedColumn
	ds_fecha_emision: Date;

	@Column
	@ProtectedColumn
	ds_fecha_hora: Date;

	@Column
	@ProtectedColumn
	CS_NUMTRANSF_DESTINO: string;

	@Column
	@ProtectedColumn
	dFechaRegistro: Date;
}