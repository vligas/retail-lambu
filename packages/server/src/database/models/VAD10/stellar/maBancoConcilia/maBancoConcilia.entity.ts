import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCO_CONCILIA',
})
export class MaBancoConcilia extends ExtendedModel<MaBancoConcilia> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codbanco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_ncuenta: string;

	@Column
	@ProtectedColumn
	N_conciliado: number;

	@Column
	@ProtectedColumn
	n_conciliadolibro: number;

	@Column
	@ProtectedColumn
	f_fechac: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	ano: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	mes: number;

	@Column
	@ProtectedColumn
	c_conciliacion: string;

	@Column
	@ProtectedColumn
	n_Cantidad_nd: number;

	@Column
	@ProtectedColumn
	n_monto_nd: number;

	@Column
	@ProtectedColumn
	n_Cantidad_nc: number;

	@Column
	@ProtectedColumn
	n_monto_nc: number;

	@Column
	@ProtectedColumn
	n_Cantidad_dep: number;

	@Column
	@ProtectedColumn
	n_monto_dep: number;

	@Column
	@ProtectedColumn
	n_Cantidad_che: number;

	@Column
	@ProtectedColumn
	n_monto_che: number;

	@Column
	@ProtectedColumn
	n_t_Cantidad_nd: number;

	@Column
	@ProtectedColumn
	n_t_monto_nd: number;

	@Column
	@ProtectedColumn
	n_t_Cantidad_nc: number;

	@Column
	@ProtectedColumn
	n_t_monto_nc: number;

	@Column
	@ProtectedColumn
	n_t_Cantidad_dep: number;

	@Column
	@ProtectedColumn
	n_t_monto_dep: number;

	@Column
	@ProtectedColumn
	n_t_Cantidad_che: number;

	@Column
	@ProtectedColumn
	n_t_monto_che: number;

	@Column
	@ProtectedColumn
	N_SALDO: number;
}