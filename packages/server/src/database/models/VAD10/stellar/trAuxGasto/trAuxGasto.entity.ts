import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_AUX_GASTO',
})
export class TrAuxGasto extends ExtendedModel<TrAuxGasto> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_detalle: string;

	@Column
	@ProtectedColumn
	c_factura: string;

	@Column
	@ProtectedColumn
	c_codprovee: string;

	@Column
	@ProtectedColumn
	c_grupo: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	n_monto: number;

	@Column
	@ProtectedColumn
	c_item: string;

	@Column
	@ProtectedColumn
	C_CODIGO: string;
}