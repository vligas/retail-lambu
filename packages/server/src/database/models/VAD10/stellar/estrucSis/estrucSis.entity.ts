import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ESTRUC_SIS',
})
export class EstrucSis extends ExtendedModel<EstrucSis> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Nom_org: string;

	@Column
	@ProtectedColumn
	Dir_org: string;

	@Column
	@ProtectedColumn
	tlf_org: string;

	@Column
	@ProtectedColumn
	loc_org: string;

	@Column
	@ProtectedColumn
	Rif_org: string;

	@Column
	@ProtectedColumn
	Nit_org: string;

	@Column
	@ProtectedColumn
	Ser_sof: string;

	@Column
	@ProtectedColumn
	Key_Sof: string;

	@Column
	@ProtectedColumn
	CR_FISCAL: number;

	@Column
	@ProtectedColumn
	CU_SIGLAS: string;

	@Column
	@ProtectedColumn
	Alias: string;

	@Column
	@ProtectedColumn
	Pais: string;

	@Column
	@ProtectedColumn
	Estado: string;

	@Column
	@ProtectedColumn
	Ciudad: string;
}