import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_TEMP_REP_HISTORICO',
})
export class TrTempRepHistorico extends ExtendedModel<TrTempRepHistorico> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_codarticulo: string;

	@Column
	@ProtectedColumn
	n_cant_teorica: number;

	@Column
	@ProtectedColumn
	n_costo: number;

	@Column
	@ProtectedColumn
	n_total: number;

	@Column
	@ProtectedColumn
	f_fecha: Date;

	@Column
	@ProtectedColumn
	C_documento: string;

	@Column
	@ProtectedColumn
	c_deposito: string;
}