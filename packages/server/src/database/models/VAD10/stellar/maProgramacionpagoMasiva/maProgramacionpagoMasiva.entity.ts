import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROGRAMACIONPAGO_MASIVA',
})
export class MaProgramacionpagoMasiva extends ExtendedModel<MaProgramacionpagoMasiva> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CodigoProg: string;

	@Column
	@ProtectedColumn
	d_FechaCreacion: Date;

	@Column
	@ProtectedColumn
	c_Usuario: string;

	@Column
	@ProtectedColumn
	c_Status: string;

	@Column
	@ProtectedColumn
	c_LocalidadOrigen: string;

	@Column
	@ProtectedColumn
	c_Moneda: string;

	@Column
	@ProtectedColumn
	n_TotalCxP: number;

	@Column
	@ProtectedColumn
	n_TotalCxC: number;

	@Column
	@ProtectedColumn
	n_TotalGeneral: number;

	@Column
	@ProtectedColumn
	c_Observacion: string;
}