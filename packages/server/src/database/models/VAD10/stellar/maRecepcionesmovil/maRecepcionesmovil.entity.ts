import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_RECEPCIONESMOVIL',
})
export class MaRecepcionesmovil extends ExtendedModel<MaRecepcionesmovil> {
	protectedTable = true

	@Column
	@ProtectedColumn
	codigoProveedor: string;

	@Column
	@ProtectedColumn
	codigoODC: string;

	@Column
	@ProtectedColumn
	codigoProducto: string;

	@Column
	@ProtectedColumn
	cantidadUnidades: number;

	@Column
	@ProtectedColumn
	cantidadEmpaques: number;

	@Column
	@ProtectedColumn
	facturaUnidades: number;

	@Column
	@ProtectedColumn
	facturaEmpaques: number;

	@Column
	@ProtectedColumn
	transportista: string;

	@Column
	@ProtectedColumn
	codigoLocalidad: string;

	@Column
	@ProtectedColumn
	codigoDeposito: string;

	@Column
	@ProtectedColumn
	documento: string;

	@Column
	@ProtectedColumn
	numeroRecepcion_PDA: string;

	@Column
	@ProtectedColumn
	UnidadesxEmpaque: number;

	@Column
	@ProtectedColumn
	numeroFactura: string;

	@Column
	@ProtectedColumn
	Observacion: string;
}