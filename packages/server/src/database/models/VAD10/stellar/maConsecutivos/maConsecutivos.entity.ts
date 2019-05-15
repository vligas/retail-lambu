import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_Consecutivos',
})
export class MaConsecutivos extends ExtendedModel<MaConsecutivos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Solicitud_Precio: number;

	@Column
	@ProtectedColumn
	espera_sdp: number;

	@Column
	@ProtectedColumn
	Orden_Compra: number;

	@Column
	@ProtectedColumn
	espera_odc: number;

	@Column
	@ProtectedColumn
	Compras: number;

	@Column
	@ProtectedColumn
	espera_com: number;

	@Column
	@ProtectedColumn
	cons_precios: number;

	@Column
	@ProtectedColumn
	cons_precios_esp: number;

	@Column
	@ProtectedColumn
	DEVCOMPRAS: number;

	@Column
	@ProtectedColumn
	DEVCOMPRAS_ESP: number;

	@Column
	@ProtectedColumn
	cod_proveedor: number;

	@Column
	@ProtectedColumn
	Recepcion: number;

	@Column
	@ProtectedColumn
	rec_espera: number;

	@Column
	@ProtectedColumn
	rec_anular: number;

	@Column
	@ProtectedColumn
	Transferencia: number;

	@Column
	@ProtectedColumn
	espera_transfer: number;

	@Column
	@ProtectedColumn
	TRANSFERENCIA_ANU: number;

	@Column
	@ProtectedColumn
	Traslados: number;

	@Column
	@ProtectedColumn
	espera_traslado: number;

	@Column
	@ProtectedColumn
	TRASLADOS_ANU: number;

	@Column
	@ProtectedColumn
	Ajustes: number;

	@Column
	@ProtectedColumn
	ESPERA_AJU: number;

	@Column
	@ProtectedColumn
	ajuste_anu: number;

	@Column
	@ProtectedColumn
	Invfisico: number;

	@Column
	@ProtectedColumn
	INVENTARIO_ANU: number;

	@Column
	@ProtectedColumn
	espera_inv: number;

	@Column
	@ProtectedColumn
	inventario: number;

	@Column
	@ProtectedColumn
	Cod_Producto: number;

	@Column
	@ProtectedColumn
	Cod_deposito: number;

	@Column
	@ProtectedColumn
	produccion_formula: number;

	@Column
	@ProtectedColumn
	produccion_orden: number;

	@Column
	@ProtectedColumn
	produccion_orden_esp: number;

	@Column
	@ProtectedColumn
	Presupuesto: number;

	@Column
	@ProtectedColumn
	promventas: number;

	@Column
	@ProtectedColumn
	espera_pre: number;

	@Column
	@ProtectedColumn
	Pedido: number;

	@Column
	@ProtectedColumn
	espera_ped: number;

	@Column
	@ProtectedColumn
	nde: number;

	@Column
	@ProtectedColumn
	ESPERA_NDE: number;

	@Column
	@ProtectedColumn
	NDE_ANULADA: number;

	@Column
	@ProtectedColumn
	detalleinv: number;

	@Column
	@ProtectedColumn
	Factura: number;

	@Column
	@ProtectedColumn
	espera_fac: number;

	@Column
	@ProtectedColumn
	devolucion: number;

	@Column
	@ProtectedColumn
	ESPERA_DEV: number;

	@Column
	@ProtectedColumn
	cambio_precio: number;

	@Column
	@ProtectedColumn
	promocion: number;

	@Column
	@ProtectedColumn
	espera_cam_precio: number;

	@Column
	@ProtectedColumn
	ofertas: number;

	@Column
	@ProtectedColumn
	espera_ofe: number;

	@Column
	@ProtectedColumn
	oferta_anu: number;

	@Column
	@ProtectedColumn
	cod_cliente: number;

	@Column
	@ProtectedColumn
	POS: number;

	@Column
	@ProtectedColumn
	Cierre_par: number;

	@Column
	@ProtectedColumn
	Cierre_tot: number;

	@Column
	@ProtectedColumn
	Deposito: number;

	@Column
	@ProtectedColumn
	Cheque: number;

	@Column
	@ProtectedColumn
	Transmisiones: number;

	@Column
	@ProtectedColumn
	ORGANIZACION: number;

	@Column
	@ProtectedColumn
	cxp_giros: number;

	@Column
	@ProtectedColumn
	cxp_cuotas: number;

	@Column
	@ProtectedColumn
	cxp_notac: number;

	@Column
	@ProtectedColumn
	cxp_notad: number;

	@Column
	@ProtectedColumn
	cxp_pagos: number;

	@Column
	@ProtectedColumn
	cxp_a_p: number;

	@Column
	@ProtectedColumn
	cxc_giros: number;

	@Column
	@ProtectedColumn
	cxc_cuotas: number;

	@Column
	@ProtectedColumn
	cxc_notac: number;

	@Column
	@ProtectedColumn
	cxc_notad: number;

	@Column
	@ProtectedColumn
	cxc_pagos: number;

	@Column
	@ProtectedColumn
	cxc_a_p: number;

	@Column
	@ProtectedColumn
	banco_egreso: number;

	@Column
	@ProtectedColumn
	banco_deposito: number;

	@Column
	@ProtectedColumn
	banco_debito: number;

	@Column
	@ProtectedColumn
	banco_credito: number;

	@Column
	@ProtectedColumn
	banco_anulado: number;

	@Column
	@ProtectedColumn
	banco_operacion: number;

	@Column
	@ProtectedColumn
	banco_conciliacion: number;

	@Column
	@ProtectedColumn
	ejecutables: number;

	@Column
	@ProtectedColumn
	d_moneda: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	N_PROD_EXT: number;

	@Column
	@ProtectedColumn
	RELACION: number;

	@Column
	@ProtectedColumn
	N_PLANTILLAS: number;

	@Column
	@ProtectedColumn
	cxp_pagos_prog: number;

	@Column
	@ProtectedColumn
	ProgPago: number;

	@Column
	@ProtectedColumn
	c_consecu_cheque: number;

	@Column
	@ProtectedColumn
	BANCO_TRANSFERENCIA: number;

	@Column
	@ProtectedColumn
	LIQUIDACION_MASIVA: number;

	@Column
	@ProtectedColumn
	NU_COLOCACIONES: number;

	@Column
	@ProtectedColumn
	LIQUIDACION_DIV: number;

	@Column
	@ProtectedColumn
	cambiopremios: number;
}