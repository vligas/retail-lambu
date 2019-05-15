import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PEDIDOS_CITAS',
})
export class MaPedidosCitas extends ExtendedModel<MaPedidosCitas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Pedido: string;

	@Column
	@ProtectedColumn
	Cliente: string;

	@Column
	@ProtectedColumn
	FechaIni: Date;

	@Column
	@ProtectedColumn
	FechaFin: Date;

	@Column
	@ProtectedColumn
	Vendedor: string;

	@Column
	@ProtectedColumn
	CodServicio: string;

	@Column
	@ProtectedColumn
	Cantidad: number;

	@Column
	@ProtectedColumn
	Precio: number;

	@Column
	@ProtectedColumn
	PorcImpuesto: number;

	@Column
	@ProtectedColumn
	Costo: number;

	@Column
	@ProtectedColumn
	Estado: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}