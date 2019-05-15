import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_TEMP_REP_HISTORICO',
})
export class MaTempRepHistorico extends ExtendedModel<MaTempRepHistorico> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_codarticulo: string;

	@Column
	@ProtectedColumn
	Saldo: number;

	@Column
	@ProtectedColumn
	valorHistorico: number;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	c_deposito: string;

	@Column
	@ProtectedColumn
	c_departamento: string;

	@Column
	@ProtectedColumn
	c_grupo: string;

	@Column
	@ProtectedColumn
	c_subgrupo: string;
}