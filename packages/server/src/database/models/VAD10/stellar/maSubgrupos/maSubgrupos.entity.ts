import { Table, Column ,Model, Unique, HasMany } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Product } from '../../exProduct/product.entity';

@Table({
	timestamps: false, tableName: 'MA_SUBGRUPOS',
})
export class MaSubgrupos extends ExtendedModel<MaSubgrupos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODIGO: string;

	@Column
	@ProtectedColumn
	c_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	c_GRUPO: string;

	@Column
	@ProtectedColumn
	c_OBSERVACIO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_in_grupo: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_in_departamento: string;

	@Column
	@ProtectedColumn
	NU_PORCUTILIDAD: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	B_LIBROLICORES: boolean;

	/// relations
	@HasMany(() => Product, {
		sourceKey: 'c_CODIGO',
		foreignKey: 'c_SubGrupo'
	})
	products: Product[];
}