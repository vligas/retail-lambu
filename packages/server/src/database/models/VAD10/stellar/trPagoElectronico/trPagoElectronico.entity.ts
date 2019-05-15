import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PAGO_ELECTRONICO',
})
export class TrPagoElectronico extends ExtendedModel<TrPagoElectronico> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	codigo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	linea: number;

	@Column
	@ProtectedColumn
	ordenDePago: string;

	@Column
	@ProtectedColumn
	fechaLiberacion: Date;

	@Column
	@ProtectedColumn
	TipoPago: string;

	@Column
	@ProtectedColumn
	Estado: string;

	@Column
	@ProtectedColumn
	fechaModificacion: Date;

	@Column
	@ProtectedColumn
	usuario: string;

	@Column
	@ProtectedColumn
	numeroCuenta: string;

	@Column
	@ProtectedColumn
	Archivo: string;

	@Column
	@ProtectedColumn
	Observacion: string;
}