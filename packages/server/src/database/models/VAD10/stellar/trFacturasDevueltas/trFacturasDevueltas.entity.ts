import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_FACTURAS_DEVUELTAS',
})
export class TrFacturasDevueltas extends ExtendedModel<TrFacturasDevueltas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_documento: string;

	@Column
	@ProtectedColumn
	c_concepto: string;

	@Column
	@ProtectedColumn
	f_fecha: Date;

	@Column
	@ProtectedColumn
	c_codarticulo: string;

	@Column
	@ProtectedColumn
	n_cantidad: number;

	@Column
	@ProtectedColumn
	n_cant_vendida: number;

	@Column
	@ProtectedColumn
	n_precio: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}