import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_ODC_MULTIPLE_PRODXPROV',
})
export class TrOdcMultipleProdxprov extends ExtendedModel<TrOdcMultipleProdxprov> {
	protectedTable = true

	@Column
	@ProtectedColumn
	codigoProducto: string;

	@Column
	@ProtectedColumn
	cantidad: number;

	@Column
	@ProtectedColumn
	codigoDeposito: string;

	@Column
	@ProtectedColumn
	equipoUsar: string;
}