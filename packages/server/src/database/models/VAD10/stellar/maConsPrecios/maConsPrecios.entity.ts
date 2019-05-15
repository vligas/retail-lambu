import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONS_PRECIOS',
})
export class MaConsPrecios extends ExtendedModel<MaConsPrecios> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	C_CODPROVEEDOR: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	D_FECHA: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CONCEPTO: string;

	@Column
	@ProtectedColumn
	C_USUARIO: string;

	@Column
	@ProtectedColumn
	C_OBSERVACION: string;

	@Column
	@ProtectedColumn
	C_STATUS: string;

	@Column
	@ProtectedColumn
	C_RELACION: string;
}