import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_BANCO_REG_DEP',
})
export class TrBancoRegDep extends ExtendedModel<TrBancoRegDep> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_codbanco: string;

	@Column
	@ProtectedColumn
	C_ncuenta: string;

	@Column
	@ProtectedColumn
	C_documentoint: string;

	@Column
	@ProtectedColumn
	C_ChequeNo: string;

	@Column
	@ProtectedColumn
	C_codbancoche: string;

	@Column
	@ProtectedColumn
	c_plaza: string;

	@Column
	@ProtectedColumn
	n_monto: number;

	@Column
	@ProtectedColumn
	f_fechal: Date;

	@Column
	@ProtectedColumn
	b_anulado: boolean;

	@Column
	@ProtectedColumn
	b_aplicado: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}