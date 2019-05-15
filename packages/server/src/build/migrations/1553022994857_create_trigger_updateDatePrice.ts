import { Sequelize } from 'sequelize-typescript';

export async function up(db: Sequelize) {
	await db.query(`IF EXISTS (SELECT * FROM sys.triggers WHERE object_id = OBJECT_ID(N'[dbo].[updateLastPriceDate]'))
		DROP TRIGGER [dbo].[updateLastPriceDate]`);

	await db.query(`CREATE TRIGGER updateLastPriceDate     
   ON  dbo.MA_PRODUCTOS 
   FOR UPDATE
AS 
	DECLARE @updateDate datetime
	DECLARE @productId varchar(15) 
	DECLARE @categoryId varchar
	SELECT @updateDate = GETDATE ( )
	SELECT @productId = c_Codigo FROM inserted
	
	BEGIN
	 IF (	
			UPDATE(n_Precio1) OR 
			UPDATE(n_Precio2) OR 
			UPDATE(n_Precio3) OR 
			UPDATE(n_PrecioO)
		)
	 BEGIN
			  UPDATE L0200exProduct
			  SET dateOfPriceUpdate = @updateDate
			  WHERE productId = @productId
					 
      END
	  
   END

   `);
}

export async function down(db: Sequelize) {
	await db.query(`
	IF OBJECT_ID('dbo.updateLastPriceDate', 'TR') IS NOT NULL 
	DROP TRIGGER dbo.updateLastPriceDate
	`);
}