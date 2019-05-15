import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_DEPOSITO',
})
export class MaDeposito extends ExtendedModel<MaDeposito> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_coddeposito: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codlocalidad: string;

	@Column
	@ProtectedColumn
	c_responsable: string;

	@Column
	@ProtectedColumn
	c_observacion: string;

	@Column
	@ProtectedColumn
	update_date: Date;

	@Column
	@ProtectedColumn
	add_date: Date;

	@Column
	@ProtectedColumn
	cu_mascara: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}