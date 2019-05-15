import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_MONEDAS',
})
export class MaMonedas extends ExtendedModel<MaMonedas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codmoneda: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	n_factor: number;

	@Column
	@ProtectedColumn
	b_preferencia: boolean;

	@Column
	@ProtectedColumn
	c_observacio: string;

	@Column
	@ProtectedColumn
	b_activa: boolean;

	@Column
	@ProtectedColumn
	c_simbolo: string;

	@Column
	@ProtectedColumn
	n_decimales: number;
}