import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONVENIOS_DESCUENTOS',
})
export class MaConveniosDescuentos extends ExtendedModel<MaConveniosDescuentos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoProveedor: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	nu_tipo: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_clave: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_ident: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoDescuento: string;
}