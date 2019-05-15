import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRODUCTOS',
})
export class MaProductos extends ExtendedModel<MaProductos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Codigo: string;

	@Column
	@ProtectedColumn
	c_Descri: string;

	@Column
	@ProtectedColumn
	c_Departamento: string;

	@Column
	@ProtectedColumn
	c_Grupo: string;

	@Column
	@ProtectedColumn
	c_Subgrupo: string;

	@Column
	@ProtectedColumn
	c_Marca: string;

	@Column
	@ProtectedColumn
	c_Modelo: string;

	@Column
	@ProtectedColumn
	c_Procede: boolean;

	@Column
	@ProtectedColumn
	n_CostoAct: number;

	@Column
	@ProtectedColumn
	n_CostoAnt: number;

	@Column
	@ProtectedColumn
	n_CostoPro: number;

	@Column
	@ProtectedColumn
	n_CostoRep: number;

	@Column
	@ProtectedColumn
	n_Precio1: number;

	@Column
	@ProtectedColumn
	n_Precio2: number;

	@Column
	@ProtectedColumn
	n_Precio3: number;

	@Column
	@ProtectedColumn
	c_Seriales: string;

	@Column
	@ProtectedColumn
	c_Compuesto: number;

	@Column
	@ProtectedColumn
	c_Presenta: string;

	@Column
	@ProtectedColumn
	n_Peso: number;

	@Column
	@ProtectedColumn
	n_Volumen: number;

	@Column
	@ProtectedColumn
	n_CantiBul: number;

	@Column
	@ProtectedColumn
	n_PesoBul: number;

	@Column
	@ProtectedColumn
	n_VolBul: number;

	@Column
	@ProtectedColumn
	n_Impuesto1: number;

	@Column
	@ProtectedColumn
	n_Impuesto2: number;

	@Column
	@ProtectedColumn
	n_Impuesto3: number;

	@Column
	@ProtectedColumn
	c_Cod_Arancel: string;

	@Column
	@ProtectedColumn
	c_Des_Arancel: string;

	@Column
	@ProtectedColumn
	n_Por_Arancel: number;

	@Column
	@ProtectedColumn
	n_Costo_Original: number;

	@Column
	@ProtectedColumn
	c_Observacio: string;

	@Column
	@ProtectedColumn
	n_Activo: number;

	@Column
	@ProtectedColumn
	n_TipoPeso: number;

	@Column
	@ProtectedColumn
	n_PrecioO: number;

	@Column
	@ProtectedColumn
	f_Inicial: Date;

	@Column
	@ProtectedColumn
	f_Final: Date;

	@Column
	@ProtectedColumn
	h_Inicial: Date;

	@Column
	@ProtectedColumn
	h_Final: Date;

	@Column
	@ProtectedColumn
	Add_Date: Date;

	@Column
	@ProtectedColumn
	Update_Date: Date;

	@Column
	@ProtectedColumn
	c_CodFabricante: string;

	@Column
	@ProtectedColumn
	Hablador: number;

	@Column
	@ProtectedColumn
	c_CodMoneda: string;

	@Column
	@ProtectedColumn
	Cant_Decimales: number;

	@Column
	@ProtectedColumn
	Moneda_Ant: number;

	@Column
	@ProtectedColumn
	Moneda_Act: number;

	@Column
	@ProtectedColumn
	Moneda_Pro: number;

	@Column
	@ProtectedColumn
	c_Codigo_Base: string;

	@Column
	@ProtectedColumn
	c_Descri_Base: string;

	@Column
	@ProtectedColumn
	Text1: string;

	@Column
	@ProtectedColumn
	Text2: string;

	@Column
	@ProtectedColumn
	Text3: string;

	@Column
	@ProtectedColumn
	Text4: string;

	@Column
	@ProtectedColumn
	Text5: string;

	@Column
	@ProtectedColumn
	Text6: string;

	@Column
	@ProtectedColumn
	Text7: string;

	@Column
	@ProtectedColumn
	Text8: string;

	@Column
	@ProtectedColumn
	Date1: Date;

	@Column
	@ProtectedColumn
	Nume1: number;

	@Column
	@ProtectedColumn
	n_Cantidad_Tmp: string;

	@Column
	@ProtectedColumn
	c_Cod_Plantilla: string;

	@Column
	@ProtectedColumn
	c_UsuarioAdd: string;

	@Column
	@ProtectedColumn
	c_UsuarioUpd: string;

	@Column
	@ProtectedColumn
	n_Prod_Ext: string;

	@Column
	@ProtectedColumn
	n_Pro_Ext: string;

	@Column
	@ProtectedColumn
	nu_Tipo_Producto: number;

	@Column
	@ProtectedColumn
	nu_InsumoInterno: number;

	@Column
	@ProtectedColumn
	nu_PrecioRegulado: number;

	@Column
	@ProtectedColumn
	nu_PocentajeMerma: number;

	@Column
	@ProtectedColumn
	nu_NivelClave: number;

	@Column
	@ProtectedColumn
	cu_Descripcion_Corta: string;

	@Column
	@ProtectedColumn
	bs_PermiteTeclado: boolean;

	@Column
	@ProtectedColumn
	bs_PermiteCantidad: boolean;

	@Column
	@ProtectedColumn
	nu_StockMin: number;

	@Column
	@ProtectedColumn
	nu_StockMax: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}