import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CXP_IMPUESTOS',
})
export class MaCxpImpuestos extends ExtendedModel<MaCxpImpuestos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_documento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_TIPODOC: string;

	@Column
	@ProtectedColumn
	ns_BaseImpuesto: number;

	@Column
	@ProtectedColumn
	ns_MontoImpuesto: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ns_PorcentajeImpuesto: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codProveedor: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codlocalidad: string;
}