import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CAMBIOCODIGO',
})
export class MaCambiocodigo extends ExtendedModel<MaCambiocodigo> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Historico: string;

	@Column
	@ProtectedColumn
	f_Fecha: Date;

	@Column
	@ProtectedColumn
	c_TipoReg: string;

	@Column
	@ProtectedColumn
	c_CodAfectado: string;

	@Column
	@ProtectedColumn
	c_Usuario: string;

	@Column
	@ProtectedColumn
	c_CodStellar: string;
}