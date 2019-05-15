import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_MONITOREO_CHEQUES',
})
export class MaMonitoreoCheques extends ExtendedModel<MaMonitoreoCheques> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_banco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_cuenta: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documento: string;

	@Column
	@ProtectedColumn
	c_documentoint: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}