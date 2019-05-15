import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_BANCO_BENEFICIARIO',
})
export class TrBancoBeneficiario extends ExtendedModel<TrBancoBeneficiario> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documentoint: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_concepto: string;

	@Column
	@ProtectedColumn
	C_beneficiario: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	C_CODBANCODESTINO: string;

	@Column
	@ProtectedColumn
	C_CUENTA: string;

	@Column
	@ProtectedColumn
	CODCONCEPTO: number;

	@Column
	@ProtectedColumn
	CU_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	CU_TIPO_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	N_MONTO: number;

	@Column
	@ProtectedColumn
	CU_DOCUMNETO: string;

	@Column
	@ProtectedColumn
	CU_TPO_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	C_CODBEN: string;

	@Column
	@ProtectedColumn
	C_CODBENEFICIARIO: string;
}