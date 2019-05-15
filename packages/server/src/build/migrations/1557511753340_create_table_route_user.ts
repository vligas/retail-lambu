import { Sequelize } from 'sequelize-typescript';

const nameTable= 'L0200txRouterUser';

export async function up(db: Sequelize) {
    await db.query(`IF NOT EXISTS (SELECT [name] FROM sys.tables WHERE [name] = '${nameTable}') 
        CREATE TABLE ${nameTable} (
            id INT IDENTITY(1,1) PRIMARY KEY,
            userId INT NOT NULL,
            branchOfficeId INT NOT NULL,
            createdAt date,
            updatedAt date,
            createdBy nvarchar(15),
            updatedBy nvarchar(15),
    

            CONSTRAINT fk_router_userId FOREIGN KEY (userId)
            REFERENCES L0200exUser(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE,

            CONSTRAINT fk_router_branchOfficeId FOREIGN KEY (branchOfficeId)
            REFERENCES L0200mdBranchOffice(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    );`);
}

export async function down(db: Sequelize) {
    await db.query(` IF OBJECT_ID('dbo.${nameTable}', 'U') IS NOT NULL DROP TABLE dbo.${nameTable}`);
}