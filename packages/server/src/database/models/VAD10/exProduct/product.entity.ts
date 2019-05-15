import { Table, Column, Model, Unique, HasMany, BelongsToMany, BelongsTo, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { TrOdc } from '../stellar/trOdc/trOdc.entity';
import { TagProduct } from '../tagProduct/tagProduct.entity';
import { Tag } from '../tag/tag.entity';
import { MaDepartamentos } from '../stellar/maDepartamentos/maDepartamentos.entity';
import { MaGrupos } from '../stellar/maGrupos/maGrupos.entity';
import { MaSubgrupos } from '../stellar/maSubgrupos/maSubgrupos.entity';
import { TrInventario } from '../stellar/trInventario/trInventario.entity';
import { User } from '../user/user.entity';

@Table({
  tableName: 'L0200vwProduct',
})
export class Product extends ExtendedModel<Product> {


  @Column
  // tslint:disable-next-line:variable-name
  productId: string;

  @Column
  // tslint:disable-next-line:variable-name
  categoryId: number;

  // @Column({
  //   primaryKey: true
  // })
  // // tslint:disable-next-line:variable-name
  // prodID: string;

  @Column
  dateOfPriceUpdate: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Codigo: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Descri: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Departamento: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Grupo: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Subgrupo: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Marca: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Modelo: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Procede: boolean;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_CostoAct: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_CostoAnt: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_CostoPro: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_CostoRep: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Precio1: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Precio2: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Precio3: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Seriales: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Compuesto: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Presenta: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Peso: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Volumen: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_CantiBul: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_PesoBul: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_VolBul: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Impuesto1: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Impuesto2: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Impuesto3: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Cod_Arancel: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Des_Arancel: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Por_Arancel: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Costo_Original: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Observacio: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Activo: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_TipoPeso: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_PrecioO: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  f_Inicial: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  f_Final: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  h_Inicial: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  h_Final: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Add_Date: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Update_Date: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_CodFabricante: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Hablador: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_CodMoneda: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Cant_Decimales: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Moneda_Ant: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Moneda_Act: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Moneda_Pro: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Codigo_Base: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Descri_Base: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text1: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text2: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text3: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text4: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text5: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text6: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text7: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Text8: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Date1: Date;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Nume1: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Cantidad_Tmp: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_Cod_Plantilla: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_UsuarioAdd: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  c_UsuarioUpd: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Prod_Ext: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  n_Pro_Ext: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_Tipo_Producto: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_InsumoInterno: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_PrecioRegulado: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_PocentajeMerma: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_NivelClave: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  cu_Descripcion_Corta: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  bs_PermiteTeclado: boolean;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  bs_PermiteCantidad: boolean;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_StockMin: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  nu_StockMax: number;

  @Column
  @ProtectedColumn
  ID: string;

  /// Relations

  @HasMany(() => TrOdc, {
    sourceKey: 'c_Codigo',
    foreignKey: 'c_CODARTICULO'
  })
  buyOrders: TrOdc[];

  @BelongsToMany(() => Tag, () => TagProduct)
  tags: Tag[];

  @BelongsTo(() => MaDepartamentos, {
    foreignKey: 'c_Departamento',
    targetKey: 'C_CODIGO'
  })
  maDepartament: MaDepartamentos[];

  @BelongsTo(() => MaGrupos, {
    foreignKey: 'c_Grupo',
    targetKey: 'c_CODIGO'
  })
  maGroup: MaGrupos[];

  @BelongsTo(() => MaSubgrupos, {
    foreignKey: 'c_SubGrupo',
    targetKey: 'c_CODIGO'
  })
  maSubGroup: MaSubgrupos[];

  @HasMany(() => TrInventario, {
    sourceKey: 'c_Codigo',
    foreignKey: 'c_CODARTICULO',
  })
  movements: TrInventario[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @Column
  createdBy: string;

  @Column
  updatedBy: string;

  @Column
  deletedBy: string;

  @BelongsTo(() => User, {
    foreignKey: 'createdBy',
    targetKey: 'codusuario'
  })
  createdByUser: User;

  @BelongsTo(() => User, {
    foreignKey: 'updatedBy',
    targetKey: 'codusuario'
  })
  updatedByUser: User;

  @BelongsTo(() => User, {
    foreignKey: 'deletedBy',
    targetKey: 'codusuario'
  })
  deletedByUser: User;

}
