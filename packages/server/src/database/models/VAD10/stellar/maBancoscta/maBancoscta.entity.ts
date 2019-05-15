import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCOSCTA',
})
export class MaBancoscta extends ExtendedModel<MaBancoscta> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CUENTA: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_BANCO: string;

	@Column
	@ProtectedColumn
	c_SUCURSAL: string;

	@Column
	@ProtectedColumn
	c_DIRECCION: string;

	@Column
	@ProtectedColumn
	c_GERENTE: string;

	@Column
	@ProtectedColumn
	c_TELEFONOS: string;

	@Column
	@ProtectedColumn
	c_FAX: string;

	@Column
	@ProtectedColumn
	c_EMAIL: string;

	@Column
	@ProtectedColumn
	c_CONTABLE: string;

	@Column
	@ProtectedColumn
	n_saldo: number;

	@Column
	@ProtectedColumn
	n_saldoant: number;

	@Column
	@ProtectedColumn
	n_saldoconciliado: number;

	@Column
	@ProtectedColumn
	n_saldoconciliadoant: number;

	@Column
	@ProtectedColumn
	c_codmoneda: string;

	@Column
	@ProtectedColumn
	c_consecu_cheque: string;

	@Column
	@ProtectedColumn
	c_ubicacion_rtf: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	n_conciliado: number;

	@Column
	@ProtectedColumn
	nu_nivel: number;

	@Column
	@ProtectedColumn
	cu_tipoArchivoConciliacion: string;

	@Column
	@ProtectedColumn
	cu_separadorArchivoConciliacion: string;
}