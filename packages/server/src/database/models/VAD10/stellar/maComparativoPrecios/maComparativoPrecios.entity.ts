import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMPARATIVO_PRECIOS',
})
export class MaComparativoPrecios extends ExtendedModel<MaComparativoPrecios> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	d_Fecha: Date;

	@Column
	@ProtectedColumn
	TipoPrecio: string;

	@Column
	@ProtectedColumn
	status: string;

	@Column
	@ProtectedColumn
	Observacion: string;

	@Column
	@ProtectedColumn
	Descripcion: string;
}