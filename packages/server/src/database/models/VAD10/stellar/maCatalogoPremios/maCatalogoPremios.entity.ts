import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CATALOGO_PREMIOS',
})
export class MaCatalogoPremios extends ExtendedModel<MaCatalogoPremios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigo: string;

	@Column
	@ProtectedColumn
	ds_fechahora_inicio: Date;

	@Column
	@ProtectedColumn
	ds_fechahora_fin: Date;

	@Column
	@ProtectedColumn
	bs_tipopremio: boolean;

	@Column
	@ProtectedColumn
	bs_producto: boolean;

	@Column
	@ProtectedColumn
	ns_valor: number;

	@Column
	@ProtectedColumn
	cs_descripcion: string;
}