import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
  await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdCategory') CREATE TABLE L0200mdCategory (
  id INT IDENTITY(1,1)  NOT NULL PRIMARY KEY,
  code nvarchar(15) NOT NULL,
  description nvarchar(255),
  createdAt date,
  updatedAt date,
  deletedAt date,
  createdBy nvarchar(15),
  updatedBy nvarchar(15),
  deletedBy nvarchar(15),
  stockMin INT

  );`);

}

export async function down(db: Sequelize) {

  await db.query(`
  IF OBJECT_ID('dbo.L0200mdCategory', 'U') IS NOT NULL 
  DROP TABLE dbo.L0200mdCategory
  `);
}
