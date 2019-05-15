import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'REGLAS_COMERCIALES',
})
export class ReglasComerciales extends ExtendedModel<ReglasComerciales> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Estimacion_PV: number;

	@Column
	@ProtectedColumn
	Auto_codigo: boolean;

	@Column
	@ProtectedColumn
	caracter_codigo: number;

	@Column
	@ProtectedColumn
	Auto_banco: boolean;

	@Column
	@ProtectedColumn
	caracter_banco: number;

	@Column
	@ProtectedColumn
	Auto_cliente: boolean;

	@Column
	@ProtectedColumn
	caracter_cliente: number;

	@Column
	@ProtectedColumn
	Auto_deposito: boolean;

	@Column
	@ProtectedColumn
	caracter_deposito: number;

	@Column
	@ProtectedColumn
	Auto_moneda: boolean;

	@Column
	@ProtectedColumn
	caracter_moneda: number;

	@Column
	@ProtectedColumn
	Auto_localidad: boolean;

	@Column
	@ProtectedColumn
	caracter_localidad: number;

	@Column
	@ProtectedColumn
	Auto_proveedor: boolean;

	@Column
	@ProtectedColumn
	caracter_proveedor: number;

	@Column
	@ProtectedColumn
	Auto_usuario: boolean;

	@Column
	@ProtectedColumn
	caracter_usuario: number;

	@Column
	@ProtectedColumn
	TIPO_REDONDEO: number;

	@Column
	@ProtectedColumn
	redondear_mitad: boolean;

	@Column
	@ProtectedColumn
	considerar_imp: boolean;

	@Column
	@ProtectedColumn
	REDONDEAR_PRECIOS: boolean;

	@Column
	@ProtectedColumn
	NIVEL_MOD_PRECIOS: number;

	@Column
	@ProtectedColumn
	IMPUESTO: number;

	@Column
	@ProtectedColumn
	VARIAR9: boolean;

	@Column
	@ProtectedColumn
	NIVEL_MOD_COSTOS: number;

	@Column
	@ProtectedColumn
	MANEJA_POS: boolean;

	@Column
	@ProtectedColumn
	ESTIMACION_INV: number;

	@Column
	@ProtectedColumn
	NIVEL_CIERRE_FORZADO: number;

	@Column
	@ProtectedColumn
	mas_productos: boolean;

	@Column
	@ProtectedColumn
	ARCHIVO_BALANZA: string;

	@Column
	@ProtectedColumn
	FACTURA_ENCABEZADO: boolean;

	@Column
	@ProtectedColumn
	NO_PUNTOS: number;

	@Column
	@ProtectedColumn
	MUESTRAIMPFAC: boolean;

	@Column
	@ProtectedColumn
	AUTO_VENDEDOR: boolean;

	@Column
	@ProtectedColumn
	BLN_RTF_REPLACE_ONE: boolean;

	@Column
	@ProtectedColumn
	BU_VENDEDOR: boolean;

	@Column
	@ProtectedColumn
	CARACTER_VENDEDOR: string;

	@Column
	@ProtectedColumn
	CU_CLIENTE_CONTADO: string;

	@Column
	@ProtectedColumn
	IMPRESORA_ETIQUETA: string;

	@Column
	@ProtectedColumn
	NIVEL_Autorizacion_credito: number;

	@Column
	@ProtectedColumn
	bAceptarRecSinOrden: boolean;

	@Column
	@ProtectedColumn
	bnivelcambioprecio: boolean;
}