import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REGLASDENEGOCIO',
})
export class MaReglasdenegocio extends ExtendedModel<MaReglasdenegocio> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDModulo: string;

	@Column
	@ProtectedColumn
	IDProceso: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	Campo: string;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	Tipo: string;

	@Column
	@ProtectedColumn
	ValorDefault: string;

	@Column
	@ProtectedColumn
	ValoresPermitidos: string;

	@Column
	@ProtectedColumn
	Valor: string;

	@Column
	@ProtectedColumn
	Oculto: boolean;
}