import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
  await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200exProduct') CREATE TABLE L0200exProduct (
    
    id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    productId nvarchar(15) NOT NULL,
    categoryId INT NULL,
    dateOfPriceUpdate datetimeoffset,
    createdAt date,
    updatedAt date,
    deletedAt date,
    createdBy nvarchar(15),
    updatedBy nvarchar(15),
    deletedBy nvarchar(15),

    CONSTRAINT fk_codProduct FOREIGN KEY (productId) 
    REFERENCES MA_PRODUCTOS(c_Codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_category FOREIGN KEY (categoryId)
    REFERENCES L0200mdCategory(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    );`);
}


export async function down(db: Sequelize) {
  await db.query(`
    IF OBJECT_ID('dbo.L0200exProduct', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200exProduct
  `);
}