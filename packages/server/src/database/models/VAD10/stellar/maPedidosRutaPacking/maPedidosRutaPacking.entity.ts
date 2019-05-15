import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PEDIDOS_RUTA_PACKING',
})
export class MaPedidosRutaPacking extends ExtendedModel<MaPedidosRutaPacking> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CodLote: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CodPedido: string;

	@Column
	@ProtectedColumn
	CantEmpaques: number;

	@Column
	@ProtectedColumn
	FechaEmpacado: Date;
}