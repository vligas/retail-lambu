import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONCILIACIONAUTO_TEMPORAL',
})
export class MaConciliacionautoTemporal extends ExtendedModel<MaConciliacionautoTemporal> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	codigoTransaccion: string;

	@Column
	@ProtectedColumn
	detalleTransaccion: string;

	@Column
	@ProtectedColumn
	numeroTransaccion: string;

	@Column
	@ProtectedColumn
	montoTransaccion: number;

	@Column
	@ProtectedColumn
	fechaTransaccion: Date;

	@Column
	@ProtectedColumn
	tipoTransaccion: string;
}