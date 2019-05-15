import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_TRIBUTOS',
})
export class MaTributos extends ExtendedModel<MaTributos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codigo: string;

	@Column
	@ProtectedColumn
	c_descripcio: string;

	@Column
	@ProtectedColumn
	c_termino: string;

	@Column
	@ProtectedColumn
	n_alicuota: number;

	@Column
	@ProtectedColumn
	c_clasificacion: string;

	@Column
	@ProtectedColumn
	c_ventas: boolean;

	@Column
	@ProtectedColumn
	c_compras: boolean;

	@Column
	@ProtectedColumn
	c_renta: string;
}