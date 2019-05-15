import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PROGRAMACIONPAGO_MASIVA',
})
export class TrProgramacionpagoMasiva extends ExtendedModel<TrProgramacionpagoMasiva> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CodigoProg: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_OrdenPago: string;
}