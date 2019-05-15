import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PRODUCTOS',
})
export class TrPendProductos extends ExtendedModel<TrPendProductos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column
	@ProtectedColumn
	C_DESCRI: string;

	@Column
	@ProtectedColumn
	c_departamento: string;

	@Column
	@ProtectedColumn
	c_grupo: string;

	@Column
	@ProtectedColumn
	c_subgrupo: string;

	@Column
	@ProtectedColumn
	c_marca: string;

	@Column
	@ProtectedColumn
	c_modelo: string;

	@Column
	@ProtectedColumn
	c_procede: boolean;

	@Column
	@ProtectedColumn
	n_costoact: number;

	@Column
	@ProtectedColumn
	n_costoant: number;

	@Column
	@ProtectedColumn
	n_costopro: number;

	@Column
	@ProtectedColumn
	n_costorep: number;

	@Column
	@ProtectedColumn
	n_precio1: number;

	@Column
	@ProtectedColumn
	n_precio2: number;

	@Column
	@ProtectedColumn
	n_precio3: number;

	@Column
	@ProtectedColumn
	c_seriales: string;

	@Column
	@ProtectedColumn
	c_compuesto: string;

	@Column
	@ProtectedColumn
	c_presenta: string;

	@Column
	@ProtectedColumn
	n_peso: number;

	@Column
	@ProtectedColumn
	n_volumen: number;

	@Column
	@ProtectedColumn
	n_cantibul: number;

	@Column
	@ProtectedColumn
	n_pesobul: number;

	@Column
	@ProtectedColumn
	n_volbul: number;

	@Column
	@ProtectedColumn
	n_impuesto1: number;

	@Column
	@ProtectedColumn
	n_impuesto2: number;

	@Column
	@ProtectedColumn
	n_impuesto3: number;

	@Column
	@ProtectedColumn
	c_cod_arancel: string;

	@Column
	@ProtectedColumn
	c_des_arancel: string;

	@Column
	@ProtectedColumn
	n_por_arancel: number;

	@Column
	@ProtectedColumn
	n_costo_original: number;

	@Column
	@ProtectedColumn
	c_observacio: string;

	@Column
	@ProtectedColumn
	n_activo: number;

	@Column
	@ProtectedColumn
	n_tipopeso: number;

	@Column
	@ProtectedColumn
	n_precioO: number;

	@Column
	@ProtectedColumn
	f_inicial: Date;

	@Column
	@ProtectedColumn
	f_final: Date;

	@Column
	@ProtectedColumn
	h_inicial: Date;

	@Column
	@ProtectedColumn
	h_final: Date;

	@Column
	@ProtectedColumn
	add_date: Date;

	@Column
	@ProtectedColumn
	update_date: Date;

	@Column
	@ProtectedColumn
	c_codfabricante: string;

	@Column
	@ProtectedColumn
	HABLADOR: number;

	@Column
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column
	@ProtectedColumn
	CANT_DECIMALES: number;

	@Column
	@ProtectedColumn
	MONEDA_ANT: number;

	@Column
	@ProtectedColumn
	MONEDA_ACT: number;

	@Column
	@ProtectedColumn
	MONEDA_PRO: number;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column
	@ProtectedColumn
	c_usuarioAdd: string;

	@Column
	@ProtectedColumn
	c_usuarioupd: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	C_CODIGO_BASE: string;

	@Column
	@ProtectedColumn
	C_DESCRI_BASE: string;

	@Column
	@ProtectedColumn
	TEXT1: string;

	@Column
	@ProtectedColumn
	TEXT2: string;

	@Column
	@ProtectedColumn
	TEXT3: string;

	@Column
	@ProtectedColumn
	TEXT4: string;

	@Column
	@ProtectedColumn
	TEXT5: string;

	@Column
	@ProtectedColumn
	TEXT6: string;

	@Column
	@ProtectedColumn
	TEXT7: string;

	@Column
	@ProtectedColumn
	TEXT8: string;

	@Column
	@ProtectedColumn
	DATE1: Date;

	@Column
	@ProtectedColumn
	NUME1: number;

	@Column
	@ProtectedColumn
	N_CANTIDAD_TMP: string;

	@Column
	@ProtectedColumn
	C_COD_PLANTILLA: string;

	@Column
	@ProtectedColumn
	NU_TIPO_PRODUCTO: number;

	@Column
	@ProtectedColumn
	nu_insumointerno: number;

	@Column
	@ProtectedColumn
	nu_precioregulado: number;

	@Column
	@ProtectedColumn
	nu_pocentajemerma: number;

	@Column
	@ProtectedColumn
	nu_nivelClave: number;

	@Column
	@ProtectedColumn
	CU_DESCRIPCION_CORTA: string;

	@Column
	@ProtectedColumn
	bs_permiteteclado: boolean;

	@Column
	@ProtectedColumn
	bs_permitecantidad: boolean;

	@Column
	@ProtectedColumn
	nu_stockmin: number;

	@Column
	@ProtectedColumn
	nu_stockmax: number;
}