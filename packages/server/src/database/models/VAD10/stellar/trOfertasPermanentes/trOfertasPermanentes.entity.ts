import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_OFERTAS_PERMANENTES',
})
export class TrOfertasPermanentes extends ExtendedModel<TrOfertasPermanentes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codigooferta: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codigo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}