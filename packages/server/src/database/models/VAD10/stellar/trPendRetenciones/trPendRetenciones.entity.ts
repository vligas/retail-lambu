import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_RETENCIONES',
})
export class TrPendRetenciones extends ExtendedModel<TrPendRetenciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_RETENCION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	NU_CONCEPTO: number;

	@Column
	@ProtectedColumn
	NU_ITEM_APLICAR: number;

	@Column
	@ProtectedColumn
	NU_PORCENTAJE_APLICAR: number;

	@Column
	@ProtectedColumn
	NU_EVENTO: number;

	@Column
	@ProtectedColumn
	NU_APLICAR_PROVEEDORES: boolean;

	@Column
	@ProtectedColumn
	NU_NIVEL: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	NU_TIPO_CAMBIO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}