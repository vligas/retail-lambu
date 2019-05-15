import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_DEPARTAMENTOS',
})
export class TrPendDepartamentos extends ExtendedModel<TrPendDepartamentos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	C_GRUPO: string;

	@Column
	@ProtectedColumn
	C_OBSERVACIO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column
	@ProtectedColumn
	NU_PORCUTILIDAD: number;

	@Column
	@ProtectedColumn
	B_LIBROLICORES: boolean;
}