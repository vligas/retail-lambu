import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'CONFIGURAR_SAL',
})
export class ConfigurarSal extends ExtendedModel<ConfigurarSal> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	N_SALTOS: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}