import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CXP_PROG',
})
export class MaCxpProg extends ExtendedModel<MaCxpProg> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_Documento: string;

	@Column
	@ProtectedColumn
	C_Relacion: string;

	@Column
	@ProtectedColumn
	C_Codigo: string;

	@Column
	@ProtectedColumn
	C_localidad: string;

	@Column
	@ProtectedColumn
	C_usuario: string;

	@Column
	@ProtectedColumn
	c_concepto: string;

	@Column
	@ProtectedColumn
	c_detalle: string;

	@Column
	@ProtectedColumn
	c_observacion: string;

	@Column
	@ProtectedColumn
	f_fechae: Date;

	@Column
	@ProtectedColumn
	f_fechav: Date;

	@Column
	@ProtectedColumn
	n_impuesto: number;

	@Column
	@ProtectedColumn
	n_bimpuesto: number;

	@Column
	@ProtectedColumn
	n_total: number;

	@Column
	@ProtectedColumn
	n_PagadoImp: number;

	@Column
	@ProtectedColumn
	n_Pagado: number;

	@Column
	@ProtectedColumn
	n_retencion: number;

	@Column
	@ProtectedColumn
	n_subtotal: number;

	@Column
	@ProtectedColumn
	N_pimpuesto: number;

	@Column
	@ProtectedColumn
	c_codmoneda: string;

	@Column
	@ProtectedColumn
	n_factor: number;

	@Column
	@ProtectedColumn
	F_CANCELACION: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	ProgPago: number;

	@Column
	@ProtectedColumn
	Estado: number;
}