import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PuntoVentas_Tmp',
})
export class TrPuntoventasTmp extends ExtendedModel<TrPuntoventasTmp> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Codigo: string;

	@Column
	@ProtectedColumn
	Cant: number;

	@Column
	@ProtectedColumn
	Precio: number;
}