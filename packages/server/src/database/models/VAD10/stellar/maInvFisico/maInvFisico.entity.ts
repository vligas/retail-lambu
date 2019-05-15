import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_INV_FISICO',
})
export class MaInvFisico extends ExtendedModel<MaInvFisico> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	d_FECHA: Date;

	@Column
	@ProtectedColumn
	c_STATUS: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	c_codMONEDA: string;

	@Column
	@ProtectedColumn
	n_FACTORCAMBIO: number;

	@Column
	@ProtectedColumn
	c_OBSERVACION: string;

	@Column
	@ProtectedColumn
	c_CODCOMPRADOR: string;

	@Column
	@ProtectedColumn
	c_DEP_ORIG: string;

	@Column
	@ProtectedColumn
	c_MOTIVO: string;

	@Column
	@ProtectedColumn
	NO_ELAB: number;

	@Column
	@ProtectedColumn
	CU_CODDEPARTAMENTO: string;

	@Column
	@ProtectedColumn
	CU_CODGRUPO: string;

	@Column
	@ProtectedColumn
	CU_CODSUBGRUPO: string;

	@Column
	@ProtectedColumn
	CU_CODPROVEEDOR: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}