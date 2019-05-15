import { Table, Column, Model, Unique, BelongsTo } from 'sequelize-typescript';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Product } from '../../exProduct/product.entity';

@Table({
	timestamps: false, tableName: 'TR_INVENTARIO',
})
export class TrInventario extends ExtendedModel<TrInventario> {
	protectedTable = true

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_LINEA: number;

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_CONCEPTO: string;

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_DEPOSITO: string;

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_CODARTICULO: string;

	@Column
	@ProtectedColumn
	n_CANTIDAD: number;

	@Column
	@ProtectedColumn
	n_COSTO: number;

	@Column
	@ProtectedColumn
	n_SUBTOTAL: number;

	@Column
	@ProtectedColumn
	n_IMPUESTO: number;

	@Column
	@ProtectedColumn
	n_TOTAL: number;

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_TIPOMOV: string;

	@Column
	@ProtectedColumn
	n_cant_teorica: number;

	@Column
	@ProtectedColumn
	n_cant_diferencia: number;

	@Column
	@ProtectedColumn
	N_PRECIO: number;

	@Column
	@ProtectedColumn
	N_PRECIO_ORIGINAL: number;

	@Column
	@ProtectedColumn
	f_fecha: string;

	@Column({ primaryKey: true })
	@ProtectedColumn
	c_codlocalidad: string;

	@Column
	@ProtectedColumn
	n_factorcambio: number;

	@Column({ primaryKey: true })
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	C_COMPUESTO: string;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column
	@ProtectedColumn
	n_descuentogeneral: number;

	@Column
	@ProtectedColumn
	n_descuentoespecifico: number;

	@Column
	@ProtectedColumn
	c_documento_origen: string;

	@Column
	@ProtectedColumn
	c_tipodoc_origen: string;

	@Column
	@ProtectedColumn
	N_CANTIDADFAC: number;

	@Column
	@ProtectedColumn
	ns_descuento: number;

	@Column
	@ProtectedColumn
	cs_comprobanteContable: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	ns_CantidadEmpaque: number;

	@Column
	@ProtectedColumn
	IMPUESTO: number;

	@BelongsTo(() => Product, {
		foreignKey: 'c_CODARTICULO',
		targetKey: 'c_Codigo'
	})
	product: Product[]
}