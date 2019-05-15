import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_MODULO_PROCESO',
})
export class TrModuloProceso extends ExtendedModel<TrModuloProceso> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Tabla: string;

	@Column
	@ProtectedColumn
	Campo: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}