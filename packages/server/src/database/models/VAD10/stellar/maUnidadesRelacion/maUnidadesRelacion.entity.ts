import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_UNIDADES_RELACION',
})
export class MaUnidadesRelacion extends ExtendedModel<MaUnidadesRelacion> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoProducto: string;

	@Column
	@ProtectedColumn
	nu_relacionUnidad: number;

	@Column
	@ProtectedColumn
	nu_desviacion: number;
}