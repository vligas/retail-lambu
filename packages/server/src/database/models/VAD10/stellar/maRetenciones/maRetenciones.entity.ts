import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_RETENCIONES',
})
export class MaRetenciones extends ExtendedModel<MaRetenciones> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_RETENCION: string;

	@Column
	@ProtectedColumn
	CS_DESCRIPCION: string;

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
	NU_ACEPTA_PARCIALES: boolean;

	@Column
	@ProtectedColumn
	NU_NIVEL: number;

	@Column
	@ProtectedColumn
	cs_correlativo: string;

	@Column
	@ProtectedColumn
	NS_MONTOMIN: number;

	@Column
	@ProtectedColumn
	NS_PORCBASE: number;

	@Column
	@ProtectedColumn
	NS_SUSTRAENDO: number;
}