import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_SINCRONIZACION',
})
export class MaSincronizacion extends ExtendedModel<MaSincronizacion> {
	protectedTable = true

	@Column
	@ProtectedColumn
	F_FECHA_MA_VENTAS: Date;

	@Column
	@ProtectedColumn
	C_DOC_MA_VENTAS_VEN: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_VENTAS_POS_VEN: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_VENTAS_DEV: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_VENTAS_POS_DEV: number;

	@Column
	@ProtectedColumn
	F_FECHA_MA_INVENTARIO: Date;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_TRA: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_TRA_ANU: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_TRS: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_TRS_ANU: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_AJU: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_AJU_ANU: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_INV: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_INV_ANU: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_REC: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_REC_ANU: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_PRD: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_INVENTARIO_PRD_ANU: number;

	@Column
	@ProtectedColumn
	F_FECHA_MA_COMPRAS: Date;

	@Column
	@ProtectedColumn
	C_DOC_MA_COMPRAS_COM: number;

	@Column
	@ProtectedColumn
	C_DOC_MA_COMPRAS_DCM: number;

	@Column
	@ProtectedColumn
	F_FECHA_ODC: Date;

	@Column
	@ProtectedColumn
	C_DOC_MA_ODC_ODC: number;

	@Column
	@ProtectedColumn
	H_BUSCAR_DATA: Date;

	@Column
	@ProtectedColumn
	B_REINTENTAR: boolean;

	@Column
	@ProtectedColumn
	C_CODSUCURSAL: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}