import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_TRAZA_FICHAS',
})
export class MaTrazaFichas extends ExtendedModel<MaTrazaFichas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_ID: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_FICHA: string;

	@Column
	@ProtectedColumn
	CS_CODIGO_USUARIO: string;

	@Column
	@ProtectedColumn
	CS_TIPO_OPERACION: string;

	@Column
	@ProtectedColumn
	CS_FECHA_OPERACION: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CODIGO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_TIPO_OBJETO: number;
}