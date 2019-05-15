import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_MONEDAS',
})
export class TrPendMonedas extends ExtendedModel<TrPendMonedas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	N_FACTOR: number;

	@Column
	@ProtectedColumn
	B_PREFERENCIA: boolean;

	@Column
	@ProtectedColumn
	C_OBSERVACIO: string;

	@Column
	@ProtectedColumn
	B_ACTIVA: boolean;

	@Column
	@ProtectedColumn
	C_SIMBOLO: string;

	@Column
	@ProtectedColumn
	N_DECIMALES: number;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}