import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REGLASDENEGOCIO_OLD_BAK',
})
export class MaReglasdenegocioOldBak extends ExtendedModel<MaReglasdenegocioOldBak> {
	protectedTable = true

	@Column
	@ProtectedColumn
	IDModulo: string;

	@Column
	@ProtectedColumn
	IDProceso: string;

	@Column
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