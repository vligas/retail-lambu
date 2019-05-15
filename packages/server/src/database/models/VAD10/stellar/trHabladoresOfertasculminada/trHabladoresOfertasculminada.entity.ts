import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_HABLADORES_OFERTASCULMINADA',
})
export class TrHabladoresOfertasculminada extends ExtendedModel<TrHabladoresOfertasculminada> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codproducto: string;

	@Column
	@ProtectedColumn
	ds_fecha_caida: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}