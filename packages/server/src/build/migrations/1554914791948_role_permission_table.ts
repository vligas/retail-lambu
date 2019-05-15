import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = 'L0200mdRolePermission') CREATE TABLE L0200mdRolePermission (
      
        id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        roleId INT NOT NULL,
        permissionId INT NOT NULL,
        createdAt date,
        updatedAt date,
        deletedAt date,
        createdBy nvarchar(15),
        updatedBy nvarchar(15),
        deletedBy nvarchar(15),

        CONSTRAINT fk_role_permission_roleId FOREIGN KEY (roleId) 
        REFERENCES L0200mdRole(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
        CONSTRAINT fk_role_permission_permissionId FOREIGN KEY (permissionId)
        REFERENCES L0200mdPermission(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );`);
}

export async function down(db: Sequelize) {
    await db.query(`
    IF OBJECT_ID('dbo.L0200mdRolePermission', 'U') IS NOT NULL 
    DROP TABLE dbo.L0200mdRolePermission
    `);
}