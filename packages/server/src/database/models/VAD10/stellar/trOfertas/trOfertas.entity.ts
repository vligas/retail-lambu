import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_OFERTAS',
})
export class TrOfertas extends ExtendedModel<TrOfertas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documento: string;

	@Column
	@ProtectedColumn
	c_codarticulo: string;

	@Column
	@ProtectedColumn
	n_precio1: number;

	@Column
	@ProtectedColumn
	n_precio2: number;

	@Column
	@ProtectedColumn
	n_precio3: number;

	@Column
	@ProtectedColumn
	n_oferta: number;

	@Column
	@ProtectedColumn
	n_costo: number;

	@Column
	@ProtectedColumn
	N_TIPOPESO: number;

	@Column
	@ProtectedColumn
	C_DEPARTAMENTO: string;

	@Column
	@ProtectedColumn
	C_GRUPO: string;

	@Column
	@ProtectedColumn
	C_SUBGRUPO: string;

	@Column
	@ProtectedColumn
	N_PROD_EXT: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}