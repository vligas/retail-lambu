import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_SOLICITUD',
})
export class MaSolicitud extends ExtendedModel<MaSolicitud> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	d_FECHA: Date;

	@Column
	@ProtectedColumn
	c_status: string;

	@Column
	@ProtectedColumn
	c_CODPROVEEDOR: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	c_codmoneda: string;

	@Column
	@ProtectedColumn
	n_FACTORCAMBIO: number;

	@Column
	@ProtectedColumn
	c_OBSERVACION: string;

	@Column
	@ProtectedColumn
	N_SUBTOTAL: number;

	@Column
	@ProtectedColumn
	N_IMPUESTO: number;

	@Column
	@ProtectedColumn
	N_TOTAL: number;

	@Column
	@ProtectedColumn
	C_USUARIO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;
}