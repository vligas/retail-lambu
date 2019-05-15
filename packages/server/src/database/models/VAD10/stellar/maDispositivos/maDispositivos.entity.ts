import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DISPOSITIVOS',
})
export class MaDispositivos extends ExtendedModel<MaDispositivos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column
	@ProtectedColumn
	N_PUERTO: number;

	@Column
	@ProtectedColumn
	N_BAUDIOS: number;

	@Column
	@ProtectedColumn
	C_PARIDAD: string;

	@Column
	@ProtectedColumn
	N_DATO: number;

	@Column
	@ProtectedColumn
	N_PARADA: number;

	@Column
	@ProtectedColumn
	C_PARALELO: string;

	@Column
	@ProtectedColumn
	C_TecnSele: string;

	@Column
	@ProtectedColumn
	C_OPOS: string;
}