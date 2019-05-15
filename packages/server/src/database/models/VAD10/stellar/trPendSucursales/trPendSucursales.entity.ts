import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_SUCURSALES',
})
export class TrPendSucursales extends ExtendedModel<TrPendSucursales> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	C_DIRECCION: string;

	@Column
	@ProtectedColumn
	C_GERENTE: string;

	@Column
	@ProtectedColumn
	C_SUBGERENTE: string;

	@Column
	@ProtectedColumn
	C_TELEFONO: string;

	@Column
	@ProtectedColumn
	C_ESTADO: number;

	@Column
	@ProtectedColumn
	C_SERVIDOR: string;

	@Column
	@ProtectedColumn
	B_TRASMITIR: boolean;

	@Column
	@ProtectedColumn
	B_ACTVAD10: boolean;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column
	@ProtectedColumn
	c_ciudad: string;

	@Column
	@ProtectedColumn
	c_nombre_cheque: string;

	@Column
	@ProtectedColumn
	cu_DireccionUltimaVersion: string;

	@Column
	@ProtectedColumn
	nu_ActualizarUltimaVersion: number;

	@Column
	@ProtectedColumn
	nu_MensajeUltimaVersion: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}