import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_DENOMINACION',
})
export class TrPendDenominacion extends ExtendedModel<TrPendDenominacion> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODDENOMINA: string;

	@Column
	@ProtectedColumn
	C_DENOMINACION: string;

	@Column
	@ProtectedColumn
	N_VALOR: number;

	@Column
	@ProtectedColumn
	C_REAL: boolean;

	@Column
	@ProtectedColumn
	C_POS: boolean;

	@Column
	@ProtectedColumn
	N_MONTO_COMPRA: number;

	@Column
	@ProtectedColumn
	N_MONTO_VUELTO: number;

	@Column
	@ProtectedColumn
	B_PERMITE_VUELTO: boolean;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

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
	bs_verificacionoperaciones_especiales: boolean;

	@Column
	@ProtectedColumn
	bs_credito: boolean;

	@Column
	@ProtectedColumn
	nu_verificacionElectronica: number;
}