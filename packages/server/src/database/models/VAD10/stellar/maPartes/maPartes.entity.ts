import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PARTES',
})
export class MaPartes extends ExtendedModel<MaPartes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_PARTE: string;

	@Column
	@ProtectedColumn
	N_CANTIDAD: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}