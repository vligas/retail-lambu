import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`
       IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdRole') CREATE TABLE L0200mdRole (
           id INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
           name NVARCHAR(255) NOT NULL,
           createdAt date,
           updatedAt date,
           deletedAt date,
           createdBy nvarchar(15),
           updatedBy nvarchar(15),
           deletedBy nvarchar(15),

   
           description NVARCHAR(255)
           
       ) 
    `);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdRole', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdRole
    `);
}