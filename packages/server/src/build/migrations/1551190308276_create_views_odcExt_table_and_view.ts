import { Sequelize } from 'sequelize-typescript';
export async function up(db: Sequelize) {
  await db.query(`  IF OBJECT_ID('dbo.L0200vwOdc', 'V') IS NOT NULL 
  DROP VIEW dbo.L0200vwOdc
  `);
  await db.query(`
  CREATE VIEW L0200vwOdc  AS
  SELECT  dbo.MA_ODC.c_DOCUMENTO,
  dbo.MA_ODC.d_FECHA,
  dbo.MA_ODC.c_DESCRIPCION,
  dbo.MA_ODC.c_status,
  dbo.MA_ODC.c_CODPROVEEDOR,
  dbo.MA_ODC.c_CODLOCALIDAD,
  dbo.MA_ODC.C_CODMONEDA,
  dbo.MA_ODC.n_FACTORCAMBIO,
  dbo.MA_ODC.n_DESCUENTO,
  dbo.MA_ODC.c_OBSERVACION,
  dbo.MA_ODC.b_backorder,
  dbo.MA_ODC.c_RELACION,
  dbo.MA_ODC.c_CODCOMPRADOR,
  dbo.MA_ODC.d_fecha_recepcion,
  dbo.MA_ODC.N_SUBTOTAL,
  dbo.MA_ODC.N_IMPUESTO,
  dbo.MA_ODC.N_TOTAL,
  dbo.MA_ODC.C_DESPACHAR,
  dbo.MA_ODC.DU_FECHAVENCIMIENTO,
  dbo.MA_ODC.cs_codlocalidad,
  dbo.MA_ODC.cs_requisicion,
  dbo.L0200exOdc.*
  FROM dbo.L0200exOdc LEFT OUTER JOIN
  dbo.MA_ODC ON 
  dbo.L0200exOdc.c_DOCUMENT = dbo.MA_ODC.c_DOCUMENTO AND 
  dbo.L0200exOdc.c_estatus = dbo.MA_ODC.c_status AND
  dbo.L0200exOdc.c_CODLOCAL = dbo.MA_ODC.c_CODLOCALIDAD AND 
  dbo.L0200exOdc.cs_codlocal = dbo.MA_ODC.cs_codlocalidad
  `);
}


export async function down(db: Sequelize) {
  await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.views WHERE [name] = 'L0200vwOdc') DROP VIEW L0200vwOdc`);
}
