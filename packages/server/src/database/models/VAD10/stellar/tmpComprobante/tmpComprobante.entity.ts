import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TMP_Comprobante',
})
export class TmpComprobante extends ExtendedModel<TmpComprobante> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDDeCuenta: number;

	@Column
	@ProtectedColumn
	Codigo: string;

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
	Usuario: string;

	@Column
	@ProtectedColumn
	Linea: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	IDDeCentroCosto: number;
}