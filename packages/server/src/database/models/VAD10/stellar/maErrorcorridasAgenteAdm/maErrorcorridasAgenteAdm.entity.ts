import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ERRORCORRIDAS_AGENTE_ADM',
})
export class MaErrorcorridasAgenteAdm extends ExtendedModel<MaErrorcorridasAgenteAdm> {
	protectedTable = true

	@Column
	@ProtectedColumn
	equipo: string;

	@Column
	@ProtectedColumn
	corrida: string;

	@Column
	@ProtectedColumn
	error: string;

	@Column
	@ProtectedColumn
	nerror: number;

	@Column
	@ProtectedColumn
	sucursal: string;

	@Column
	@ProtectedColumn
	tabla: string;

	@Column
	@ProtectedColumn
	codigo: string;

	@Column
	@ProtectedColumn
	concepto: string;

	@Column
	@ProtectedColumn
	fecha: Date;

	@Column
	@ProtectedColumn
	tipo: number;

	@Column
	@ProtectedColumn
	rutina: string;

	@Column
	@ProtectedColumn
	fechahora: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}