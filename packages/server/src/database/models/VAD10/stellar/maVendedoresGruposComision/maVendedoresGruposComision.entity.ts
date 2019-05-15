import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_VENDEDORES_GRUPOS_COMISION',
})
export class MaVendedoresGruposComision extends ExtendedModel<MaVendedoresGruposComision> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_GRUPO_COMISION: string;

	@Column
	@ProtectedColumn
	cs_DESCRIPCION_GRUPO: string;

	@Column
	@ProtectedColumn
	cs_PORCENTAJE: number;

	@Column
	@ProtectedColumn
	cs_ITEM_AFECTADO: number;

	@Column
	@ProtectedColumn
	cs_CONSIDERAR_PARA_IMPUESTO: boolean;
}