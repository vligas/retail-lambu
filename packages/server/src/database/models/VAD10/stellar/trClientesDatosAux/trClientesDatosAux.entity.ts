import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_CLIENTES_DATOS_AUX',
})
export class TrClientesDatosAux extends ExtendedModel<TrClientesDatosAux> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CS_CODIGO: string;

	@Column
	@ProtectedColumn
	CS_NOMBRE: string;

	@Column
	@ProtectedColumn
	NS_PARENTESCO: number;

	@Column
	@ProtectedColumn
	DS_FECHA_NAC: Date;

	@Column
	@ProtectedColumn
	NS_SEXO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}