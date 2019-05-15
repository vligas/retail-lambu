import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMPETIDORES',
})
export class MaCompetidores extends ExtendedModel<MaCompetidores> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_codigo: string;

	@Column
	@ProtectedColumn
	Rif: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	RazonSocial: string;

	@Column
	@ProtectedColumn
	Localidad: string;

	@Column
	@ProtectedColumn
	Observacion: string;

	@Column
	@ProtectedColumn
	Status: string;

	@Column
	@ProtectedColumn
	Alias: string;
}