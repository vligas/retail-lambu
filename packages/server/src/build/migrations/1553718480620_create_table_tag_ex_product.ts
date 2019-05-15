import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdTagProduct') CREATE TABLE L0200mdTagProduct (
      
        id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        tagId INT NOT NULL,
        productId INT NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),

        CONSTRAINT AK_tag_exproduct_tagId_productId UNIQUE(tagId, productId),

        CONSTRAINT fk_tag_exproduct_idProduct FOREIGN KEY (productId) 
        REFERENCES L0200exProduct(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
        CONSTRAINT fk_tag_exproduct_idTag FOREIGN KEY (tagId)
        REFERENCES L0200mdTag(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdTagProduct', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdTagProduct
    `);
}