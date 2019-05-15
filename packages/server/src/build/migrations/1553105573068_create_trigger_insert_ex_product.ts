import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
  await db.query(`IF EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[insertExProduct]'))
		DROP TRIGGER [dbo].[insertExProduct]`);

  await db.query(`CREATE TRIGGER dbo.insertExProduct 
    ON  dbo.MA_PRODUCTOS 
    FOR INSERT
 AS 
      DECLARE @updateDate datetime
      DECLARE @productId varchar(15) 
      SELECT @updateDate = GETDATE ( )
      SELECT @productId = c_Codigo FROM inserted
            
      BEGIN
          INSERT INTO L0200exProduct (productId, dateOfPriceUpdate)
                 VALUES (@productId, @updateDate)
      END
   `);
}

export async function down(db: Sequelize) {
  await db.query(`
	IF OBJECT_ID('dbo.insertExProduct', 'TR') IS NOT NULL 
	DROP TRIGGER dbo.insertExProduct
	`);
}