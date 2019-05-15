import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[insertExtensionOnNewUser]'))
        DROP TRIGGER [dbo].[insertExtensionOnNewUser]`);

    await db.query(`CREATE TRIGGER dbo.insertExtensionOnNewUser 
        ON  dbo.MA_USUARIOS 
        FOR INSERT
        AS 
        DECLARE @userId varchar(15) 
        SELECT @userId = codusuario FROM inserted
                
        BEGIN
            INSERT INTO L0200exUser (userId)
                    VALUES (@userId)
        END
    `);
}

export async function down(db: Sequelize) {
    await db.query(`
	IF OBJECT_ID('dbo.insertExtensionOnNewUser', 'TR') IS NOT NULL 
	DROP TRIGGER dbo.insertExtensionOnNewUser
	`);
}