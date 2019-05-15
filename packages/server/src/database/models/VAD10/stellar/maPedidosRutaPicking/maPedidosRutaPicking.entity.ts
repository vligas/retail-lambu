import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PEDIDOS_RUTA_PICKING',
})
export class MaPedidosRutaPicking extends ExtendedModel<MaPedidosRutaPicking> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CodLote: string;

	@Column
	@ProtectedColumn
	CodPedido: string;

	@Column
	@ProtectedColumn
	CodProducto: string;

	@Column
	@ProtectedColumn
	CodRecolector: string;

	@Column
	@ProtectedColumn
	CodSupervisorPicking: string;

	@Column
	@ProtectedColumn
	CodEmpacador: string;

	@Column
	@ProtectedColumn
	CodSupervisorPacking: string;

	@Column
	@ProtectedColumn
	CantSolicitada: number;

	@Column
	@ProtectedColumn
	CantRecolectada: number;

	@Column
	@ProtectedColumn
	CantEmpacada: number;

	@Column
	@ProtectedColumn
	Picking: boolean;

	@Column
	@ProtectedColumn
	Packing: boolean;

	@Column
	@ProtectedColumn
	FechaAsignacion: Date;

	@Column
	@ProtectedColumn
	PackingMobile_CantEmpaques: number;
}