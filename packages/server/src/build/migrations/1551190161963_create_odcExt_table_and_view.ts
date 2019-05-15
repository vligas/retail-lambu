import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
  await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200exOdc') CREATE TABLE L0200exOdc (


    c_DOCUMENT nvarchar(15) NOT NULL,
    c_estatus  nvarchar(5) NOT NULL,
    c_CODLOCAL nvarchar(10) NOT NULL,
    cs_codlocal nvarchar(50) NOT NULL,
    id INT IDENTITY(1,1)  NOT NULL,
    createdAt date,
    updatedAt date,
    deletedAt date,
    createdBy nvarchar(15),
    updatedBy nvarchar(15),
    deletedBy nvarchar(15),


    
    CONSTRAINT pkk_odc_codigo PRIMARY KEY NONCLUSTERED (id), 

    CONSTRAINT fkk_odc_codigo FOREIGN KEY (c_DOCUMENT,c_estatus,c_CODLOCAL,cs_codlocal) REFERENCES MA_ODC (c_DOCUMENTO,c_status,c_CODLOCALIDAD,cs_codlocalidad)

    );`);

}

export async function down(db: Sequelize) {

  await db.query(`
  IF OBJECT_ID('dbo.L0200exOdc', 'U') IS NOT NULL 
  DROP TABLE dbo.L0200exOdc
  `);
}