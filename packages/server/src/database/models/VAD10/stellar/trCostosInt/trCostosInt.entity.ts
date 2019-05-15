import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_COSTOS_INT',
})
export class TrCostosInt extends ExtendedModel<TrCostosInt> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_des_costo: string;

	@Column
	@ProtectedColumn
	c_des_moneda: string;

	@Column
	@ProtectedColumn
	n_fac_moneda: number;

	@Column
	@ProtectedColumn
	n_monto: number;

	@Column
	@ProtectedColumn
	c_cod_costo: string;

	@Column
	@ProtectedColumn
	c_cod_moneda: string;

	@Column
	@ProtectedColumn
	c_gru_costo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codigo: string;
}