import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_Comprobantes',
})
export class TrComprobantes extends ExtendedModel<TrComprobantes> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDDeMovimiento: number;

	@Column
	@ProtectedColumn
	Codigo: string;

	@Column
	@ProtectedColumn
	IDDeCuenta: number;

	@Column
	@ProtectedColumn
	Tipo: number;

	@Column
	@ProtectedColumn
	Monto: number;

	@Column
	@ProtectedColumn
	Referencia: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	Fecha: Date;

	@Column
	@ProtectedColumn
	IDDeComprobante: number;

	@Column
	@ProtectedColumn
	USUARIO: string;

	@Column
	@ProtectedColumn
	IDDeCentroCosto: number;
}