import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROGRAMADOR_PAGOS',
})
export class MaProgramadorPagos extends ExtendedModel<MaProgramadorPagos> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_CODIGO: string;

	@Column
	@ProtectedColumn
	DS_FECHA: Date;

	@Column
	@ProtectedColumn
	DS_FECHAPAGO: Date;

	@Column
	@ProtectedColumn
	CS_CODPROVEEDOR: string;

	@Column
	@ProtectedColumn
	CS_PROVEEDOR: string;

	@Column
	@ProtectedColumn
	CS_USUARIO: string;

	@Column
	@ProtectedColumn
	CS_LOCALIDAD: string;

	@Column
	@ProtectedColumn
	CS_LOCALIDADORIGEN: string;

	@Column
	@ProtectedColumn
	CS_ESTATUS: string;

	@Column
	@ProtectedColumn
	CS_MONEDA: string;

	@Column
	@ProtectedColumn
	NS_TOTAL_CANCELAR: number;

	@Column
	@ProtectedColumn
	NS_TOTAL_CANCELARCxP: number;

	@Column
	@ProtectedColumn
	NS_TOTAL_CANCELARCxC: number;

	@Column
	@ProtectedColumn
	cs_observacion: string;

	@Column
	@ProtectedColumn
	ds_fecha_proceso: Date;

	@Column
	@ProtectedColumn
	cs_usuario_proceso: string;

	@Column
	@ProtectedColumn
	c_EstatusAprobacion: string;

	@Column
	@ProtectedColumn
	c_ProgramacionMasiva: string;
}