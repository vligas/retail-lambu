import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdUserRole') CREATE TABLE L0200mdUserRole (
      
        id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        userId INT NOT NULL,
        roleId INT NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),


        CONSTRAINT fk_user_role_roleId FOREIGN KEY (roleId) 
        REFERENCES L0200mdRole(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
        CONSTRAINT fk_user_role_userId FOREIGN KEY (userId)
        REFERENCES L0200exUser(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdUserRole', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdUserRole
    `);
}