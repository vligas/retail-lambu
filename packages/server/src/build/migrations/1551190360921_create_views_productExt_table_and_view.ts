import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
  await db.query(`  IF OBJECT_ID('dbo.L0200vwProduct', 'V') IS NOT NULL 
  DROP VIEW dbo.L0200vwProduct
  `);

  await db.query(`
  CREATE VIEW L0200vwProduct  AS
  SELECT  dbo.MA_PRODUCTOS.c_Codigo,
  dbo.MA_PRODUCTOS.c_Descri,
  dbo.MA_PRODUCTOS.c_Departamento,
  dbo.MA_PRODUCTOS.c_Grupo,
  dbo.MA_PRODUCTOS.c_Subgrupo,
  dbo.MA_PRODUCTOS.c_Marca,
  dbo.MA_PRODUCTOS.c_Modelo,
  dbo.MA_PRODUCTOS.c_Procede,
  dbo.MA_PRODUCTOS.n_CostoAct,
  dbo.MA_PRODUCTOS.n_CostoAnt,
  dbo.MA_PRODUCTOS.n_CostoPro,
  dbo.MA_PRODUCTOS.n_CostoRep,
  dbo.MA_PRODUCTOS.n_Precio1,
  dbo.MA_PRODUCTOS.n_Precio2,
  dbo.MA_PRODUCTOS.n_Precio3,
  dbo.MA_PRODUCTOS.c_Seriales,
  dbo.MA_PRODUCTOS.c_Compuesto,
  dbo.MA_PRODUCTOS.c_Presenta,
  dbo.MA_PRODUCTOS.n_Peso,
  dbo.MA_PRODUCTOS.n_Volumen,
  dbo.MA_PRODUCTOS.n_CantiBul,
  dbo.MA_PRODUCTOS.n_PesoBul,
  dbo.MA_PRODUCTOS.n_VolBul,
  dbo.MA_PRODUCTOS.n_Impuesto1,
  dbo.MA_PRODUCTOS.n_Impuesto2,
  dbo.MA_PRODUCTOS.n_Impuesto3,
  dbo.MA_PRODUCTOS.c_Cod_Arancel,
  dbo.MA_PRODUCTOS.c_Des_Arancel,
  dbo.MA_PRODUCTOS.n_Por_Arancel,
  dbo.MA_PRODUCTOS.n_Costo_Original,
  dbo.MA_PRODUCTOS.c_Observacio,
  dbo.MA_PRODUCTOS.n_Activo,
  dbo.MA_PRODUCTOS.n_TipoPeso,
  dbo.MA_PRODUCTOS.n_PrecioO,
  dbo.MA_PRODUCTOS.f_Inicial,
  dbo.MA_PRODUCTOS.f_Final,
  dbo.MA_PRODUCTOS.h_Inicial,
  dbo.MA_PRODUCTOS.h_Final,
  dbo.MA_PRODUCTOS.Add_Date,
  dbo.MA_PRODUCTOS.Update_Date,
  dbo.MA_PRODUCTOS.c_CodFabricante,
  dbo.MA_PRODUCTOS.Hablador,
  dbo.MA_PRODUCTOS.c_CodMoneda,
  dbo.MA_PRODUCTOS.Cant_Decimales,
  dbo.MA_PRODUCTOS.Moneda_Ant,
  dbo.MA_PRODUCTOS.Moneda_Act,
  dbo.MA_PRODUCTOS.Moneda_Pro,
  dbo.MA_PRODUCTOS.c_Codigo_Base,
  dbo.MA_PRODUCTOS.c_Descri_Base,
  dbo.MA_PRODUCTOS.Text1,
  dbo.MA_PRODUCTOS.Text2,
  dbo.MA_PRODUCTOS.Text3,
  dbo.MA_PRODUCTOS.Text4,
  dbo.MA_PRODUCTOS.Text5,
  dbo.MA_PRODUCTOS.Text6,
  dbo.MA_PRODUCTOS.Text7,
  dbo.MA_PRODUCTOS.Text8,
  dbo.MA_PRODUCTOS.Date1,
  dbo.MA_PRODUCTOS.Nume1,
  dbo.MA_PRODUCTOS.n_Cantidad_Tmp,
  dbo.MA_PRODUCTOS.c_Cod_Plantilla,
  dbo.MA_PRODUCTOS.c_UsuarioAdd,
  dbo.MA_PRODUCTOS.c_UsuarioUpd,
  dbo.MA_PRODUCTOS.n_Prod_Ext,
  dbo.MA_PRODUCTOS.n_Pro_Ext,
  dbo.MA_PRODUCTOS.nu_Tipo_Producto,
  dbo.MA_PRODUCTOS.nu_InsumoInterno,
  dbo.MA_PRODUCTOS.nu_PrecioRegulado,
  dbo.MA_PRODUCTOS.nu_PocentajeMerma,
  dbo.MA_PRODUCTOS.nu_NivelClave,
  dbo.MA_PRODUCTOS.cu_Descripcion_Corta,
  dbo.MA_PRODUCTOS.bs_PermiteTeclado,
  dbo.MA_PRODUCTOS.bs_PermiteCantidad,
  dbo.MA_PRODUCTOS.nu_StockMin,
  dbo.MA_PRODUCTOS.nu_StockMax , dbo.L0200exProduct.*
  FROM    dbo.MA_PRODUCTOS FULL JOIN
     dbo.L0200exProduct ON dbo.MA_PRODUCTOS.c_Codigo = dbo.L0200exProduct.productId
  `);
}


export async function down(db: Sequelize) {

  await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.views WHERE [name] = 'L0200vwProduct') DROP VIEW L0200vwProduct`);
}
