import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_TRANSPORTE',
})
export class MaTransporte extends ExtendedModel<MaTransporte> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codtransporte: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	C_PLACA: string;

	@Column
	@ProtectedColumn
	C_COLOR: string;

	@Column
	@ProtectedColumn
	C_MARCA: string;

	@Column
	@ProtectedColumn
	C_MODELO: string;

	@Column
	@ProtectedColumn
	C_RESPONSABLE: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	UPDATE_DATE: Date;

	@Column
	@ProtectedColumn
	ADD_DATE: Date;

	@Column
	@ProtectedColumn
	n_Peso: number;

	@Column
	@ProtectedColumn
	n_Volumen: number;
}