import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMPRAS_RETENCIONES',
})
export class MaComprasRetenciones extends ExtendedModel<MaComprasRetenciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	CS_DESCRIPCION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	NS_CONCEPTO: number;

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

	@Column
	@ProtectedColumn
	NU_ITEM_APLICAR: number;

	@Column
	@ProtectedColumn
	NU_ACEPTA_PARCIALES: boolean;

	@Column
	@ProtectedColumn
	NU_EVENTO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_correlativo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CONCEPTO: string;

	@Column
	@ProtectedColumn
	NS_SUSTRAENDO: number;
}