import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_VENDEDORES',
})
export class MaVendedores extends ExtendedModel<MaVendedores> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CU_VENDEDOR_COD: string;

	@Column
	@ProtectedColumn
	CU_VENDEDOR_DES: string;

	@Column
	@ProtectedColumn
	BU_ACTIVO: boolean;

	@Column
	@ProtectedColumn
	cs_RELACION: string;

	@Column
	@ProtectedColumn
	cs_LOCALIDAD: string;

	@Column
	@ProtectedColumn
	cs_LOGIN: string;

	@Column
	@ProtectedColumn
	cs_PASSWORD: string;

	@Column
	@ProtectedColumn
	cs_INGRESO: Date;

	@Column
	@ProtectedColumn
	cs_MODIFICADO: Date;

	@Column
	@ProtectedColumn
	cs_GRUPO_COMISION: string;

	@Column
	@ProtectedColumn
	bu_cualquier_cuenta: boolean;

	@Column
	@ProtectedColumn
	cs_tipo: string;

	@Column
	@ProtectedColumn
	cu_rif: string;

	@Column
	@ProtectedColumn
	c_grupo: string;

	@Column
	@ProtectedColumn
	c_comisiones: string;

	@Column
	@ProtectedColumn
	n_limite: number;
}