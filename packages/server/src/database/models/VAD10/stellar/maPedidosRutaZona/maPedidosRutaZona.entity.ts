import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PEDIDOS_RUTA_ZONA',
})
export class MaPedidosRutaZona extends ExtendedModel<MaPedidosRutaZona> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_Corrida: string;

	@Column
	@ProtectedColumn
	cs_Codigo: string;

	@Column
	@ProtectedColumn
	cs_Descripcion: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}