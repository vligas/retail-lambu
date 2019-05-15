import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEDIDOS_RUTA',
})
export class TrPedidosRuta extends ExtendedModel<TrPedidosRuta> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_Corrida: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Documento: string;

	@Column
	@ProtectedColumn
	c_Concepto: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CodLocalidad: string;

	@Column
	@ProtectedColumn
	d_Fecha: Date;

	@Column
	@ProtectedColumn
	c_Documento_Ven: string;

	@Column
	@ProtectedColumn
	n_Subtotal: number;

	@Column
	@ProtectedColumn
	n_Impuesto: number;

	@Column
	@ProtectedColumn
	n_Total: number;

	@Column
	@ProtectedColumn
	c_Documento_NDE: string;
}