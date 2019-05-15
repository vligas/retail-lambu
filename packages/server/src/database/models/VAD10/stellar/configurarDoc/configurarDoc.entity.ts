import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'CONFIGURAR_DOC'
})
export class ConfigurarDoc extends ExtendedModel<ConfigurarDoc> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CODIGO_GRUPO: string;

	@Column
	@ProtectedColumn
	CODIGO: string;

	@Column
	@ProtectedColumn
	DESCRIPCION: string;

	@Column
	@ProtectedColumn
	RUTA: string;

	@Column
	@ProtectedColumn
	SEIMPRIME: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}