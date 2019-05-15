import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ERRORES',
})
export class MaErrores extends ExtendedModel<MaErrores> {
	protectedTable = true

	@Column
	@ProtectedColumn
	NUMERO: string;

	@Column
	@ProtectedColumn
	DESCRIPCION: string;

	@Column
	@ProtectedColumn
	FECHA: Date;

	@Column
	@ProtectedColumn
	HORA: Date;

	@Column
	@ProtectedColumn
	USUARIO: string;

	@Column
	@ProtectedColumn
	MODULO: string;

	@Column
	@ProtectedColumn
	FORMA: string;

	@Column
	@ProtectedColumn
	OBJ_PRO_FUN: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}