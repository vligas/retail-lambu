import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ESTRUCT_IMAGEN',
})
export class EstructImagen extends ExtendedModel<EstructImagen> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_key: string;

	@Column
	@ProtectedColumn
	cs_tipo: string;

	@Column
	@ProtectedColumn
	ns_tamanoV: number;

	@Column
	@ProtectedColumn
	ns_tamanoH: number;

	@Column
	@ProtectedColumn
	ns_Estatus: number;
}