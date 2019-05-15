import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_LIBROS_CONFIGURADOS',
})
export class MaLibrosConfigurados extends ExtendedModel<MaLibrosConfigurados> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_documento: string;

	@Column
	@ProtectedColumn
	cs_titulo: string;

	@Column
	@ProtectedColumn
	cs_piepagina: string;

	@Column
	@ProtectedColumn
	bs_mostrarresumen: boolean;

	@Column
	@ProtectedColumn
	ns_anchototal: number;

	@Column
	@ProtectedColumn
	cs_tipopagina: string;

	@Column
	@ProtectedColumn
	bs_activo: boolean;

	@Column
	@ProtectedColumn
	bs_ventas: boolean;
}