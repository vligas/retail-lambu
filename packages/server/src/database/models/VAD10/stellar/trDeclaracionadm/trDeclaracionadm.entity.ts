import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_DECLARACIONADM',
})
export class TrDeclaracionadm extends ExtendedModel<TrDeclaracionadm> {
	protectedTable = true

	@Column
	@ProtectedColumn
	f_fecha: Date;

	@Column
	@ProtectedColumn
	c_emisor: string;

	@Column
	@ProtectedColumn
	C_Documento: string;

	@Column
	@ProtectedColumn
	c_concepto: string;

	@Column
	@ProtectedColumn
	n_Monto: number;

	@Column
	@ProtectedColumn
	C_localidad: string;

	@Column
	@ProtectedColumn
	C_usuario: string;

	@Column
	@ProtectedColumn
	c_Tr_Documento_Rel: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	cs_codmoneda: string;

	@Column
	@ProtectedColumn
	CS_CODENOMINACION: string;

	@Column
	@ProtectedColumn
	cu_codbanco: string;

	@Column
	@ProtectedColumn
	bu_declarado: number;

	@Column
	@ProtectedColumn
	ns_factor: number;

	@Column
	@ProtectedColumn
	DS_FECHADEPOSITADO: Date;

	@Column
	@ProtectedColumn
	cs_denominacion: string;

	@Column
	@ProtectedColumn
	cs_moneda: string;

	@Column
	@ProtectedColumn
	cs_emisorcuenta: string;
}