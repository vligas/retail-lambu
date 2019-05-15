import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCOREG_X_CXP_CXC',
})
export class MaBancoregXCxpCxc extends ExtendedModel<MaBancoregXCxpCxc> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	banco_c_concepto: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	banco_c_documentoInt: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	banco_c_localidad: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	Cx_c_documento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	Cx_c_concepto: string;

	@Column
	@ProtectedColumn
	Cx_c_codigo: string;

	@Column
	@ProtectedColumn
	Cx_cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	bu_CxP_CxC: boolean;

	@Column
	@ProtectedColumn
	BANCO_C_DOCUMENTO: string;
}