import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_DESPACHO',
})
export class TrDespacho extends ExtendedModel<TrDespacho> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_detalle: string;

	@Column
	@ProtectedColumn
	c_codorden: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	n_cant: number;

	@Column
	@ProtectedColumn
	n_cant_recibida: number;

	@Column
	@ProtectedColumn
	n_cant_despachada: number;

	@Column
	@ProtectedColumn
	n_costo: number;
}