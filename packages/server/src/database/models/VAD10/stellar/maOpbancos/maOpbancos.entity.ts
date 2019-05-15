import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_OPBANCOS',
})
export class MaOpbancos extends ExtendedModel<MaOpbancos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	n_montomax: number;

	@Column
	@ProtectedColumn
	n_diasMb: number;

	@Column
	@ProtectedColumn
	n_diasPb: number;

	@Column
	@ProtectedColumn
	n_diasOPB: number;

	@Column
	@ProtectedColumn
	n_numcomprobante: number;

	@Column
	@ProtectedColumn
	n_numdebito: number;

	@Column
	@ProtectedColumn
	n_numcredito: number;

	@Column
	@ProtectedColumn
	n_numdeposito: number;

	@Column
	@ProtectedColumn
	n_MontoDebito: number;

	@Column
	@ProtectedColumn
	B_ConsiliarADM: boolean;

	@Column
	@ProtectedColumn
	B_ConsiliaContabilidad: boolean;
}