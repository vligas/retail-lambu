import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ELAB_INVENTARIO',
})
export class MaElabInventario extends ExtendedModel<MaElabInventario> {
	protectedTable = true

	@Column
	@ProtectedColumn
	B_COMENZADO: boolean;

	@Column
	@ProtectedColumn
	F_INiCIO: Date;

	@Column
	@ProtectedColumn
	B_FINALIZADO: boolean;

	@Column
	@ProtectedColumn
	F_FINAL: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_coddeposito: string;

	@Column
	@ProtectedColumn
	C_MOTIVO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	no_elab: number;

	@Column
	@ProtectedColumn
	c_codmoneda: string;

	@Column
	@ProtectedColumn
	n_factor: number;

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
	cu_CODPROVEEDOR: string;
}