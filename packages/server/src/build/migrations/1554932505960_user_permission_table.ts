import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdUserPermission') CREATE TABLE L0200mdUserPermission (
      
        id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        userId INT NOT NULL,
        permissionId INT NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),

        CONSTRAINT fk_user_permission_permissionId FOREIGN KEY (permissionId) 
        REFERENCES L0200mdPermission(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

        CONSTRAINT fk_user_permission_userId FOREIGN KEY (userId)
        REFERENCES L0200exUser(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdUserPermission', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdUserPermission
    `);
}