import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_COMPRAS_UNIDADES',
})
export class MaComprasUnidades extends ExtendedModel<MaComprasUnidades> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoCompra: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoProducto: string;

	@Column
	@ProtectedColumn
	nu_cantidadCompra: number;

	@Column
	@ProtectedColumn
	nu_relacionUnidad: number;

	@Column
	@ProtectedColumn
	CU_TIPODOCUMENTO: string;

	@Column
	@ProtectedColumn
	nu_linea: number;
}