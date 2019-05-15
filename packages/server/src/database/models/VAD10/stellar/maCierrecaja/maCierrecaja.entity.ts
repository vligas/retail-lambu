import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CIERRECAJA',
})
export class MaCierrecaja extends ExtendedModel<MaCierrecaja> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CodUsuario: string;

	@Column
	@ProtectedColumn
	Fecha: Date;

	@Column
	@ProtectedColumn
	HoraInicio: Date;

	@Column
	@ProtectedColumn
	HoraFin: Date;

	@Column
	@ProtectedColumn
	Monto: number;

	@Column
	@ProtectedColumn
	MontoFondo: number;

	@Column
	@ProtectedColumn
	Cerrada: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}