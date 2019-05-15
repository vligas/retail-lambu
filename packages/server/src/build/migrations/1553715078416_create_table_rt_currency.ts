import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdCurrency') CREATE TABLE L0200mdCurrency (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name nvarchar(45) NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),
        denomination nvarchar(100) NOT NULL
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdCurrency', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdCurrency
    `);
}