import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ALERTAGRID_ALERTAS',
})
export class MaAlertagridAlertas extends ExtendedModel<MaAlertagridAlertas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Alerta: string;

	@Column
	@ProtectedColumn
	c_Descripcion_Evento: string;

	@Column
	@ProtectedColumn
	n_ColorLineaGrid: number;

	@Column
	@ProtectedColumn
	c_D_E_ResourceID: number;
}