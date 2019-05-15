import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CxP_DETPAG_TMP',
})
export class MaCxpDetpagTmp extends ExtendedModel<MaCxpDetpagTmp> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_CONCEPTO: string;

	@Column
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column
	@ProtectedColumn
	C_CODDENOMINA: string;

	@Column
	@ProtectedColumn
	C_CODBANCO: string;

	@Column
	@ProtectedColumn
	C_NUM_CHEQUE: string;

	@Column
	@ProtectedColumn
	F_FECHA: Date;

	@Column
	@ProtectedColumn
	N_MONTO: number;

	@Column
	@ProtectedColumn
	N_FACTOR: number;

	@Column
	@ProtectedColumn
	N_CANTIDAD: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}