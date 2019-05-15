import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
    await db.query(`IF EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[deleteExProduct]'))
    DROP TRIGGER [dbo].[deleteExProduct]`);

    await db.query(`CREATE TRIGGER dbo.deleteExProduct 
    ON  dbo.MA_PRODUCTOS 
    FOR DELETE
 AS 
     DECLARE @productId varchar(15)
     SELECT @productId = c_Codigo FROM inserted
            
      BEGIN
          
          DELETE FROM L0200exProduct 
          WHERE productId = @productId
      END
`);
}

export async function down(db: Sequelize) {
    await db.query(`
	IF OBJECT_ID('dbo.deleteExProduct', 'TR') IS NOT NULL 
	DROP TRIGGER dbo.deleteExProduct
	`);
}