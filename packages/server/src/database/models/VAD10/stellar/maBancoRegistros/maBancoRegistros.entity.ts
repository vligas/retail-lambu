import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_banco_registros',
})
export class MaBancoRegistros extends ExtendedModel<MaBancoRegistros> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CodBanco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_Codcuenta: string;

	@Column
	@ProtectedColumn
	n_saldo: number;

	@Column
	@ProtectedColumn
	n_creditos: number;

	@Column
	@ProtectedColumn
	n_debitos: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}