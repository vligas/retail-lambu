import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DATOS_FISCALES',
})
export class MaDatosFiscales extends ExtendedModel<MaDatosFiscales> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_NUMEROZ: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CAJA: string;

	@Column
	@ProtectedColumn
	NU_TURNO: number;

	@Column
	@ProtectedColumn
	CS_CODCAJERO: string;

	@Column
	@ProtectedColumn
	CS_CAJERO: string;

	@Column
	@ProtectedColumn
	D_FECHA: Date;

	@Column
	@ProtectedColumn
	C_DOCINICIALVEN: string;

	@Column
	@ProtectedColumn
	C_DOCFINALVEN: string;

	@Column
	@ProtectedColumn
	F_MONTOBASEVENA: number;

	@Column
	@ProtectedColumn
	F_MONTOBASEVENB: number;

	@Column
	@ProtectedColumn
	F_MONTOBASEVENC: number;

	@Column
	@ProtectedColumn
	F_IMPUESTOVENA: number;

	@Column
	@ProtectedColumn
	F_IMPUESTOVENB: number;

	@Column
	@ProtectedColumn
	F_IMPUESTOVENC: number;

	@Column
	@ProtectedColumn
	F_EXCENTOVEN: number;

	@Column
	@ProtectedColumn
	F_MONTOTOTALVEN: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	CODCONCEPTO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CONCEPTO: string;

	@Column
	@ProtectedColumn
	F_IMPUESTOTOTALVEN: number;

	@Column
	@ProtectedColumn
	CS_NUMERO_TRANSFERENCIA: string;

	@Column
	@ProtectedColumn
	cs_comprobantecontable: string;

	@Column
	@ProtectedColumn
	C_LOCALIDAD: string;
}