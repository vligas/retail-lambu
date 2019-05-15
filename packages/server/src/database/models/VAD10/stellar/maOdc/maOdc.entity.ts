import { Table, Column ,Model, Unique, HasMany, BelongsTo } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { TrOdc } from '../trOdc/trOdc.entity';
import { MaProveedores } from '../maProveedores/maProveedores.entity';

@Table({
	timestamps: false, tableName: 'MA_ODC',
})
export class MaOdc extends ExtendedModel<MaOdc> {
	protectedTable = true;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	d_FECHA: Date;

	@Column
	@ProtectedColumn
	c_DESCRIPCION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_status: string;

	@Column
	@ProtectedColumn
	c_CODPROVEEDOR: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column
	@ProtectedColumn
	n_FACTORCAMBIO: number;

	@Column
	@ProtectedColumn
	n_DESCUENTO: number;

	@Column
	@ProtectedColumn
	c_OBSERVACION: string;

	@Column
	@ProtectedColumn
	b_backorder: boolean;

	@Column
	@ProtectedColumn
	c_RELACION: string;

	@Column
	@ProtectedColumn
	c_CODCOMPRADOR: string;

	@Column
	@ProtectedColumn
	d_fecha_recepcion: Date;

	@Column
	@ProtectedColumn
	N_SUBTOTAL: number;

	@Column
	@ProtectedColumn
	N_IMPUESTO: number;

	@Column
	@ProtectedColumn
	N_TOTAL: number;

	@Column
	@ProtectedColumn
	C_DESPACHAR: string;

	@Column
	@ProtectedColumn
	DU_FECHAVENCIMIENTO: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	cs_requisicion: string;

	///relations

	@HasMany(() => TrOdc, { 
		foreignKey: 'c_DOCUMENTO', 
		sourceKey: 'c_DOCUMENTO' 
	}) 
	rows: TrOdc[] 
	
	@BelongsTo(() => MaProveedores, { 
		foreignKey: 'c_CODPROVEEDOR', 
		targetKey: 'c_codproveed' 
	}) 
	providers: MaProveedores[] 
}