import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_CAMBIOPRECIO',
})
export class TrCambioprecio extends ExtendedModel<TrCambioprecio> {
	protectedTable = true

	@Column
	@ProtectedColumn
	C_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	C_CODARTICULO: string;

	@Column
	@ProtectedColumn
	N_PRECIO1: number;

	@Column
	@ProtectedColumn
	N_PRECIO2: number;

	@Column
	@ProtectedColumn
	N_PRECIO3: number;

	@Column
	@ProtectedColumn
	N_COSTO: number;

	@Column
	@ProtectedColumn
	N_OLDPRECIO1: number;

	@Column
	@ProtectedColumn
	N_OLDPRECIO2: number;

	@Column
	@ProtectedColumn
	N_OLDPRECIO3: number;

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
}