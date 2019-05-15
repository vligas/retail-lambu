import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DENOMINACIONES',
})
export class MaDenominaciones extends ExtendedModel<MaDenominaciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codmoneda: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_coddenomina: string;

	@Column
	@ProtectedColumn
	c_denominacion: string;

	@Column
	@ProtectedColumn
	n_valor: number;

	@Column
	@ProtectedColumn
	c_real: boolean;

	@Column
	@ProtectedColumn
	c_pos: boolean;

	@Column
	@ProtectedColumn
	n_monto_compra: number;

	@Column
	@ProtectedColumn
	n_monto_vuelto: number;

	@Column
	@ProtectedColumn
	b_permite_vuelto: boolean;

	@Column
	@ProtectedColumn
	nu_requiere_endoso: number;

	@Column
	@ProtectedColumn
	nu_imprime_forma: number;

	@Column
	@ProtectedColumn
	nu_requiere_conformacion: number;

	@Column
	@ProtectedColumn
	nu_requiere_serial: number;

	@Column
	@ProtectedColumn
	nu_verificacionElectronica: number;

	@Column
	@ProtectedColumn
	bs_verificacionoperaciones_especiales: boolean;

	@Column
	@ProtectedColumn
	bs_credito: boolean;
}