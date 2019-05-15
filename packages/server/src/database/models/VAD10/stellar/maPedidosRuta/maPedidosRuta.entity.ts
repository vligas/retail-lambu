import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PEDIDOS_RUTA',
})
export class MaPedidosRuta extends ExtendedModel<MaPedidosRuta> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_Corrida: string;

	@Column
	@ProtectedColumn
	d_Fecha: Date;

	@Column
	@ProtectedColumn
	d_FechaCorrida: Date;

	@Column
	@ProtectedColumn
	c_Usuario: string;

	@Column
	@ProtectedColumn
	c_Zona: string;

	@Column
	@ProtectedColumn
	c_Ruta: string;

	@Column
	@ProtectedColumn
	c_Transporte: string;

	@Column
	@ProtectedColumn
	b_Facturada: boolean;

	@Column
	@ProtectedColumn
	Picking: boolean;

	@Column
	@ProtectedColumn
	Packing: boolean;

	@Column
	@ProtectedColumn
	nTipoSeparacionDetalle: number;
}