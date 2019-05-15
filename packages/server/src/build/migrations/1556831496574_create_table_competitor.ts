import { Sequelize } from 'sequelize-typescript';

const nameTable = 'L0200mdCompetitor';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = '${nameTable}') 
        CREATE TABLE ${nameTable} (
            id INT IDENTITY(1,1) PRIMARY KEY,
            name NVARCHAR(45) NOT NULL,
            createdAt date,
            updatedAt date,
            deletedAt date,
            createdBy nvarchar(15),
            updatedBy nvarchar(15),
            deletedBy nvarchar(15)

    );`);
}

export async function down(db: Sequelize) {
    await db.query(` IF OBJECT_ID('dbo.${nameTable}', 'U') IS NOT NULL DROP TABLE dbo.${nameTable}`);
}