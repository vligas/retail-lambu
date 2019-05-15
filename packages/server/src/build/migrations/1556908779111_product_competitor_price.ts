import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdCompetitorPrice') CREATE TABLE L0200mdCompetitorPrice (
        id INT IDENTITY(1,1) PRIMARY KEY,
        price FLOAT NOT NULL,
        productId nvarchar(15) NOT NULL,
        branchId INT NOT NULL,
        image NVARCHAR(250) NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),

        CONSTRAINT fk_L0200mdCompetitorPrice_01 FOREIGN KEY (productId)
        REFERENCES MA_PRODUCTOS(c_Codigo),
        CONSTRAINT fk_L0200mdCompetitorPrice_02 FOREIGN KEY (branchId)
        REFERENCES L0200mdBranchOffice(id)
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdCompetitorPrice', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdCompetitorPrice
    `);
}