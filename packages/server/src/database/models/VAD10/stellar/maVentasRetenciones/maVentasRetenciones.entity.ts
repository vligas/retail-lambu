import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_VENTAS_RETENCIONES',
})
export class MaVentasRetenciones extends ExtendedModel<MaVentasRetenciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_DOCUMENTO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CONCEPTO: string;

	@Column
	@ProtectedColumn
	NS_MONTOBASE: number;

	@Column
	@ProtectedColumn
	NS_PORCENTAJE: number;

	@Column
	@ProtectedColumn
	NS_MONTO: number;

	@Column
	@ProtectedColumn
	FS_FECHA_HORA: Date;
}