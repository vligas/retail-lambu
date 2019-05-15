import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PAGOS_ELECTRONICOS',
})
export class MaPagosElectronicos extends ExtendedModel<MaPagosElectronicos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	codigo: string;

	@Column
	@ProtectedColumn
	codigoBanco: string;

	@Column
	@ProtectedColumn
	banco: string;

	@Column
	@ProtectedColumn
	cuenta: string;

	@Column
	@ProtectedColumn
	montoPresupuestado: number;

	@Column
	@ProtectedColumn
	fechaLiberacion: Date;

	@Column
	@ProtectedColumn
	saldoEnLibros: number;

	@Column
	@ProtectedColumn
	diferido: number;

	@Column
	@ProtectedColumn
	debitosEstimados: number;

	@Column
	@ProtectedColumn
	totalPago: number;

	@Column
	@ProtectedColumn
	estado: string;

	@Column
	@ProtectedColumn
	fechaEmision: Date;

	@Column
	@ProtectedColumn
	usuario: string;

	@Column
	@ProtectedColumn
	fechaModificacion: Date;

	@Column
	@ProtectedColumn
	fechaArchivo: Date;
}