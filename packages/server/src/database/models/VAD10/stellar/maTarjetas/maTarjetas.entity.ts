import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_TARJETAS',
})
export class MaTarjetas extends ExtendedModel<MaTarjetas> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_CODBANCO: string;

	@Column
	@ProtectedColumn
	C_NUMTARJETA: string;

	@Column
	@ProtectedColumn
	c_DESCRIPCION: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODTARJETA: string;
}