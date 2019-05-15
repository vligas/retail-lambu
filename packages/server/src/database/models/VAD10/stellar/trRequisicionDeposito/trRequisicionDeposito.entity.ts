import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_REQUISICION_DEPOSITO',
})
export class TrRequisicionDeposito extends ExtendedModel<TrRequisicionDeposito> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_ESTADO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	NS_LINEA: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CODARTICULO: string;

	@Column
	@ProtectedColumn
	CS_CODIGO_PROVEEDOR: string;

	@Column
	@ProtectedColumn
	CS_CODEDI: string;

	@Column
	@ProtectedColumn
	CS_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	NS_CANTIDAD: number;

	@Column
	@ProtectedColumn
	NS_COSTO: number;

	@Column
	@ProtectedColumn
	NS_CANT_RECIBIDA: number;

	@Column
	@ProtectedColumn
	NS_DECIMALES: number;

	@Column
	@ProtectedColumn
	CS_CODMONEDA: string;

	@Column
	@ProtectedColumn
	NS_FACTOR_CAMBIO: number;

	@Column
	@ProtectedColumn
	NS_PROD_EXT: string;

	@Column
	@ProtectedColumn
	cs_codlocalidad: string;

	@Column
	@ProtectedColumn
	ns_CantidadEmpaque: number;
}