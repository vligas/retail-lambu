import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_INVENTARIO',
})
export class MaInventario extends ExtendedModel<MaInventario> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CONCEPTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	d_FECHA: Date;

	@Column
	@ProtectedColumn
	c_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	c_STATUS: string;

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
	c_DEP_ORIG: string;

	@Column
	@ProtectedColumn
	c_DEP_DEST: string;

	@Column
	@ProtectedColumn
	c_MOTIVO: string;

	@Column
	@ProtectedColumn
	c_codtransporte: string;

	@Column
	@ProtectedColumn
	c_ejecutor: string;

	@Column
	@ProtectedColumn
	c_factura: string;

	@Column
	@ProtectedColumn
	c_transportista: string;

	@Column
	@ProtectedColumn
	n_cantidad_compra: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	CODCONCEPTO: number;

	@Column
	@ProtectedColumn
	cs_comprobanteContable: string;

	@Column
	@ProtectedColumn
	ds_horainicio: Date;

	@Column
	@ProtectedColumn
	ds_horafinal: Date;

	@Column
	@ProtectedColumn
	CS_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	CS_NUMERO_TRANSFERENCIA: string;

	@Column
	@ProtectedColumn
	CS_CODUNIDAD: string;

	@Column
	@ProtectedColumn
	CS_NUMTRANSF_DESTINO: string;

	@Column
	@ProtectedColumn
	dFechaRegistro: Date;
}