import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_FACTURAS_PROGPAGOS',
})
export class TrFacturasProgpagos extends ExtendedModel<TrFacturasProgpagos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_CODIGO_PAGO: string;

	@Column
	@ProtectedColumn
	CS_NUMERO_FACTURA: string;

	@Column
	@ProtectedColumn
	CS_CONCEPTO: string;

	@Column
	@ProtectedColumn
	CS_TIPO_FACTURA: string;

	@Column
	@ProtectedColumn
	DS_FECHAE: Date;

	@Column
	@ProtectedColumn
	DS_FECHAV: Date;

	@Column
	@ProtectedColumn
	NU_MONTO_FACTURA: number;

	@Column
	@ProtectedColumn
	NU_MONTO_CANCELADO: number;

	@Column
	@ProtectedColumn
	NU_SALDO_FACTURA: number;

	@Column
	@ProtectedColumn
	DS_FECHA: Date;

	@Column
	@ProtectedColumn
	NU_MONTO_DESCUENTO: number;

	@Column
	@ProtectedColumn
	NU_PORC_DESCUENTO: number;

	@Column
	@ProtectedColumn
	NU_MONTO_PRONTOPAGO: number;

	@Column
	@ProtectedColumn
	NU_PORC_PRONTOPAGO: number;

	@Column
	@ProtectedColumn
	NU_MONTO_PRONTOPAGO2: number;

	@Column
	@ProtectedColumn
	NU_PORC_PRONTOPAGO2: number;

	@Column
	@ProtectedColumn
	NU_RETENIDOFINAL: number;

	@Column
	@ProtectedColumn
	NU_MONTOXRETENER: number;
}