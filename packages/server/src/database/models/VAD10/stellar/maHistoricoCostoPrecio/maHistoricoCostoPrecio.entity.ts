import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_HISTORICO_COSTO_PRECIO',
})
export class MaHistoricoCostoPrecio extends ExtendedModel<MaHistoricoCostoPrecio> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_Historico: string;

	@Column
	@ProtectedColumn
	d_FechaCambio: Date;

	@Column
	@ProtectedColumn
	c_ProcesoOrigen: string;

	@Column
	@ProtectedColumn
	c_Documento: string;

	@Column
	@ProtectedColumn
	c_Usuario: string;

	@Column
	@ProtectedColumn
	c_CodArticulo: string;

	@Column
	@ProtectedColumn
	Precio1_Ant: number;

	@Column
	@ProtectedColumn
	Precio1_Nuevo: number;

	@Column
	@ProtectedColumn
	Precio2_Ant: number;

	@Column
	@ProtectedColumn
	Precio2_Nuevo: number;

	@Column
	@ProtectedColumn
	Precio3_Ant: number;

	@Column
	@ProtectedColumn
	Precio3_Nuevo: number;

	@Column
	@ProtectedColumn
	CostoAct_Ant: number;

	@Column
	@ProtectedColumn
	CostoAct_Nuevo: number;

	@Column
	@ProtectedColumn
	CostoRep_Ant: number;

	@Column
	@ProtectedColumn
	CostoRep_Nuevo: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}