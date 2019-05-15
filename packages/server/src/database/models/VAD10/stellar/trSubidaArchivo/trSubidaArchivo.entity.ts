import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_SUBIDA_ARCHIVO',
})
export class TrSubidaArchivo extends ExtendedModel<TrSubidaArchivo> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDSubida: string;

	@Column
	@ProtectedColumn
	f_fecha: Date;

	@Column
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	n_cantidad: number;

	@Column
	@ProtectedColumn
	n_precio_unitario: number;

	@Column
	@ProtectedColumn
	n_subtotal: number;

	@Column
	@ProtectedColumn
	n_impuesto: number;
}