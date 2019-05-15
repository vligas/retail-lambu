import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_GRUPOS',
})
export class TrPendGrupos extends ExtendedModel<TrPendGrupos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODIGO: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	C_GRUPO: string;

	@Column
	@ProtectedColumn
	c_OBSERVACIO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_departamento: string;

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