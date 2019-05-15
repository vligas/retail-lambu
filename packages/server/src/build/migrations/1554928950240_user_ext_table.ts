import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200exUser') CREATE TABLE L0200exUser (
    
        id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        userId nvarchar(15) NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),

        CONSTRAINT fk_exUser_maUser_userId FOREIGN KEY (userId) 
        REFERENCES MA_USUARIOS(codusuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

        );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200exUser', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200exUser
    `);
}