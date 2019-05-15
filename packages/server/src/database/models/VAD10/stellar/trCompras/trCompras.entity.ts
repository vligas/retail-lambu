import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_COMPRAS',
})
export class TrCompras extends ExtendedModel<TrCompras> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CONCEPTO: string;

	@Column({primaryKey: true})
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
	n_subtotal: number;

	@Column
	@ProtectedColumn
	n_impuesto: number;

	@Column
	@ProtectedColumn
	n_total: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp1: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp2: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codprincipal: string;

	@Column
	@ProtectedColumn
	n_COSTOORIGINAL: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_TIPODOC: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_DOC: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_DEPOSITO: string;

	@Column
	@ProtectedColumn
	N_CPRECIO1: number;

	@Column
	@ProtectedColumn
	N_CPRECIO2: number;

	@Column
	@ProtectedColumn
	N_CPRECIO3: number;

	@Column
	@ProtectedColumn
	N_CPRECIOR: number;

	@Column
	@ProtectedColumn
	B_INGRESAR: boolean;

	@Column
	@ProtectedColumn
	N_Prod_ext: string;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column
	@ProtectedColumn
	c_id: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	n_descuentoespecifico: number;

	@Column
	@ProtectedColumn
	n_descuentogeneral: number;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	ns_CantidadEmpaque: number;

	@Column
	@ProtectedColumn
	ns_cantidaddeldocumentoorigen: number;
}