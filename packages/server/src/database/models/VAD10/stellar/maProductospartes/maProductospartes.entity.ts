import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRODUCTOSPARTES',
})
export class MaProductospartes extends ExtendedModel<MaProductospartes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_CodigoProductoPrincipal: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_CodigoProductoParte: string;

	@Column
	@ProtectedColumn
	nu_Cantidad: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	bu_Variable: number;
}