import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_SOLICITUD',
})
export class TrSolicitud extends ExtendedModel<TrSolicitud> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	c_CODARTICULO: string;

	@Column
	@ProtectedColumn
	n_CANTIDAD: number;

	@Column
	@ProtectedColumn
	n_COSTO: number;

	@Column
	@ProtectedColumn
	n_subtotal: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp1: number;

	@Column
	@ProtectedColumn
	n_porcentajeimp2: number;

	@Column
	@ProtectedColumn
	c_codprincipal: string;

	@Column
	@ProtectedColumn
	n_COSTOORIGINAL: number;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	TR_SOLICITUD: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	ns_CantidadEmpaque: number;
}