import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`  IF OBJECT_ID('dbo.L0200vwUser', 'V') IS NOT NULL 
    DROP VIEW dbo.L0200vwUser
    `);
    await db.query(`
    CREATE VIEW L0200vwUser  AS
    SELECT
    dbo.MA_USUARIOS.codusuario,
    dbo.MA_USUARIOS.password,
    dbo.MA_USUARIOS.login_name,
    dbo.MA_USUARIOS.descripcion,
    dbo.MA_USUARIOS.localidad,
    dbo.MA_USUARIOS.Nivel,
    dbo.MA_USUARIOS.Vendedor,
    dbo.MA_USUARIOS.tipo_usuario,
    dbo.MA_USUARIOS.MOD_PRECIO_VENTA,
    dbo.MA_USUARIOS.MOD_COSTO_COMPRA,
    dbo.MA_USUARIOS.BU_CAMBIA_CLAVE,
    dbo.MA_USUARIOS.BS_ACTIVO,
    dbo.L0200exUser.*
    FROM dbo.L0200exUser FULL JOIN
    dbo.MA_USUARIOS ON 
    dbo.L0200exUser.userId = dbo.MA_USUARIOS.codusuario
    `);

}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200vwUser', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200vwUser
    `);
}