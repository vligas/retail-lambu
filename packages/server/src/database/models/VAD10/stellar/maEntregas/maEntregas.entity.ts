import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ENTREGAS',
})
export class MaEntregas extends ExtendedModel<MaEntregas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	Documento: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	RIF: string;

	@Column
	@ProtectedColumn
	Fecha: Date;

	@Column
	@ProtectedColumn
	Telefono: string;

	@Column
	@ProtectedColumn
	PedidoRelacion: string;

	@Column
	@ProtectedColumn
	Factura: string;
}