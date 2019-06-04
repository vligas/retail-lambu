import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdConfiguration') CREATE TABLE L0200mdConfiguration (
        id INT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(45) NOT NULL,
        json TEXT NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15)
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdConfiguration', 'U') IS NOT NULL
    DROP TABLE dbo.L0200mdConfiguration
    `);
}