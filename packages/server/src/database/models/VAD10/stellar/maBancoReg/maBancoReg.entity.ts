import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_BANCO_REG',
})
export class MaBancoReg extends ExtendedModel<MaBancoReg> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	c_CODBANCO: string;

	@Column
	@ProtectedColumn
	C_ncuenta: string;

	@Column
	@ProtectedColumn
	C_codBen: string;

	@Column
	@ProtectedColumn
	c_nombrebeneficiario: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	C_documento: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_concepto: string;

	@Column
	@ProtectedColumn
	c_observacion: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documentoInt: string;

	@Column
	@ProtectedColumn
	c_conciliacion: string;

	@Column
	@ProtectedColumn
	N_OPERACION: number;

	@Column
	@ProtectedColumn
	N_monto: number;

	@Column
	@ProtectedColumn
	n_cliente_prove: number;

	@Column
	@ProtectedColumn
	n_saldoact: number;

	@Column
	@ProtectedColumn
	f_fechaE: Date;

	@Column
	@ProtectedColumn
	F_fechaL: Date;

	@Column
	@ProtectedColumn
	F_fechaAplicacion: Date;

	@Column
	@ProtectedColumn
	b_Anulado: boolean;

	@Column
	@ProtectedColumn
	b_refleja: boolean;

	@Column
	@ProtectedColumn
	b_Ultima_opera: boolean;

	@Column
	@ProtectedColumn
	B_APLICADO: boolean;

	@Column
	@ProtectedColumn
	b_detalla_dep: boolean;

	@Column
	@ProtectedColumn
	b_conciliado: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_localidad: string;

	@Column
	@ProtectedColumn
	c_TransCuentaHabiente: string;

	@Column
	@ProtectedColumn
	c_TransCuenta: string;

	@Column
	@ProtectedColumn
	c_Transcodbanco: string;

	@Column
	@ProtectedColumn
	codconcepto: number;

	@Column
	@ProtectedColumn
	CU_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	CU_ORIGEN: string;

	@Column
	@ProtectedColumn
	CU_ORIGEN_CORRELATIVO: string;

	@Column
	@ProtectedColumn
	CU_SEIMPRIMIO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	CU_TIPO_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	N_IDB: number;

	@Column
	@ProtectedColumn
	bu_transferencia: number;

	@Column
	@ProtectedColumn
	C_USUARIO: string;

	@Column
	@ProtectedColumn
	n_factor: number;

	@Column
	@ProtectedColumn
	cs_comprobanteContable: string;

	@Column
	@ProtectedColumn
	ds_fechaEntregado: Date;

	@Column
	@ProtectedColumn
	cu_receptor_cedula: string;

	@Column
	@ProtectedColumn
	cu_receptor_Descripcion: string;

	@Column
	@ProtectedColumn
	CS_NUMERO_TRANSFERENCIA: string;

	@Column
	@ProtectedColumn
	cs_documentoOriginaMov: string;

	@Column
	@ProtectedColumn
	CS_NUMTRANSF_DESTINO: string;
}