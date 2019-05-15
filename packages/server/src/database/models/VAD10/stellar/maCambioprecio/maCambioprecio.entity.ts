import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CAMBIOPRECIO',
})
export class MaCambioprecio extends ExtendedModel<MaCambioprecio> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	F_FECHA: Date;

	@Column
	@ProtectedColumn
	C_OBSERVACION: string;

	@Column
	@ProtectedColumn
	C_USUARIO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	C_STATUS: string;
}