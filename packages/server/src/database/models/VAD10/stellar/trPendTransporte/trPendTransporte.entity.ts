import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_TRANSPORTE',
})
export class TrPendTransporte extends ExtendedModel<TrPendTransporte> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codtransporte: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	c_placa: string;

	@Column
	@ProtectedColumn
	c_color: string;

	@Column
	@ProtectedColumn
	c_marca: string;

	@Column
	@ProtectedColumn
	c_modelo: string;

	@Column
	@ProtectedColumn
	c_responsable: string;

	@Column
	@ProtectedColumn
	c_codlocalidad: string;

	@Column
	@ProtectedColumn
	UPDATE_DATE: Date;

	@Column
	@ProtectedColumn
	ADD_DATE: Date;

	@Column
	@ProtectedColumn
	ESTATUS: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column
	@ProtectedColumn
	n_Peso: number;

	@Column
	@ProtectedColumn
	n_Volumen: number;
}