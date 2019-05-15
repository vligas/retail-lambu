import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PRODUCTOSPARTES',
})
export class TrPendProductospartes extends ExtendedModel<TrPendProductospartes> {
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

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;
}