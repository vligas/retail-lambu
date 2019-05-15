import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_DEPOSITO',
})
export class TrPendDeposito extends ExtendedModel<TrPendDeposito> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_coddeposito: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
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
	UPDATE_DATE: Date;

	@Column
	@ProtectedColumn
	ADD_DATE: Date;

	@Column
	@ProtectedColumn
	ESTATUS: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;
}