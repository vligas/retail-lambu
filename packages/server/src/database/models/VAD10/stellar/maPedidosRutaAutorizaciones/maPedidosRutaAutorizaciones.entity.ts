import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PEDIDOS_RUTA_AUTORIZACIONES',
})
export class MaPedidosRutaAutorizaciones extends ExtendedModel<MaPedidosRutaAutorizaciones> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_Corrida: string;

	@Column
	@ProtectedColumn
	c_Documento_Ped: string;

	@Column
	@ProtectedColumn
	c_Documento_Ven: string;

	@Column
	@ProtectedColumn
	c_Cliente: string;

	@Column
	@ProtectedColumn
	c_DescriCliente: string;

	@Column
	@ProtectedColumn
	c_Usuario_Auto: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}