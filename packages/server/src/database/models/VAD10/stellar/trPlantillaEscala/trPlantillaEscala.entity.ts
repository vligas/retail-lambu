import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PLANTILLA_ESCALA',
})
export class TrPlantillaEscala extends ExtendedModel<TrPlantillaEscala> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_CODIGO: string;

	@Column
	@ProtectedColumn
	TALLA: string;

	@Column
	@ProtectedColumn
	CANTIDAD: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}