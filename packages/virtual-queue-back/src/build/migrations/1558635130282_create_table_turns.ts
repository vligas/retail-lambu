import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
  await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdTurns') CREATE TABLE L0200mdTurns (
    id INT IDENTITY(1,1)  NOT NULL PRIMARY KEY,
    name nvarchar(45) NOT NULL,
    actualTurn INT NOT NULL,
    limitTurn INT NOT NULL,
    color nvarchar(15),
    pathImg nvarchar(255),
    createdAt date,
    updatedAt date,
    deletedAt date,
    createdBy nvarchar(15),
    updatedBy nvarchar(15),
    deletedBy nvarchar(15),
  );`);

}

export async function down(db: Sequelize) {

  await db.query(`
  IF OBJECT_ID('dbo.L0200mdTurns', 'U') IS NOT NULL
  DROP TABLE dbo.L0200mdTurns
  `);
}
