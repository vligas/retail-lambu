import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRODUCCION',
})
export class MaProduccion extends ExtendedModel<MaProduccion> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_FORMULA: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	C_STATUS: string;

	@Column
	@ProtectedColumn
	C_CODUSUARIO: string;

	@Column
	@ProtectedColumn
	UPDATE_DATE: Date;

	@Column
	@ProtectedColumn
	ADD_DATE: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codlocalidad: string;

	@Column
	@ProtectedColumn
	N_COSTODIR: number;

	@Column
	@ProtectedColumn
	C_CODMONEDA: string;

	@Column
	@ProtectedColumn
	c_Instrucciones: string;

	@Column
	@ProtectedColumn
	n_TiempoPreparacion: number;
}