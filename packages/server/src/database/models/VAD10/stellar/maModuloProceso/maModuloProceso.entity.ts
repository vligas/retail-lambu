import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_MODULO_PROCESO',
})
export class MaModuloProceso extends ExtendedModel<MaModuloProceso> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	Tabla: string;

	@Column
	@ProtectedColumn
	descripcion: string;
}