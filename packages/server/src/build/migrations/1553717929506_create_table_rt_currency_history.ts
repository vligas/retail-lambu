import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdCurrencyHistory') CREATE TABLE L0200mdCurrencyHistory (
        id INT IDENTITY(1,1) PRIMARY KEY,
        date datetimeoffset  NOT NULL,
        price float NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),
        CONSTRAINT UNIQUE_DATE UNIQUE(currencyId, date),
        currencyId int NOT NULL FOREIGN KEY REFERENCES L0200mdCurrency(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdCurrencyHistory', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdCurrencyHistory
    `);
}