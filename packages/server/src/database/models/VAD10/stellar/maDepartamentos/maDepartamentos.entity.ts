import { Table, Column ,Model, Unique, HasMany } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Product } from '../../exProduct/product.entity';

@Table({
	timestamps: false, tableName: 'MA_DEPARTAMENTOS',
})
export class MaDepartamentos extends ExtendedModel<MaDepartamentos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	C_GRUPO: string;

	@Column
	@ProtectedColumn
	C_OBSERVACIO: string;

	@Column
	@ProtectedColumn
	NU_PORCUTILIDAD: number;

	@Column
	@ProtectedColumn
	B_LIBROLICORES: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	/// relations
	@HasMany(() => Product, {
		sourceKey: 'C_CODIGO',
		foreignKey: 'c_Departamento'
	})
	products: Product[];
}