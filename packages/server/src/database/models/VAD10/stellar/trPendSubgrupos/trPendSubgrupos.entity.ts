import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_SUBGRUPOS',
})
export class TrPendSubgrupos extends ExtendedModel<TrPendSubgrupos> {
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

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column
	@ProtectedColumn
	NU_PORCUTILIDAD: number;

	@Column
	@ProtectedColumn
	B_LIBROLICORES: boolean;
}