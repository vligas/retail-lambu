import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_INTERFAZ',
})
export class TrInterfaz extends ExtendedModel<TrInterfaz> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigo: string;

	@Column
	@ProtectedColumn
	cs_campo_tabla: string;

	@Column
	@ProtectedColumn
	cs_campo: string;

	@Column
	@ProtectedColumn
	nu_longitud: number;

	@Column
	@ProtectedColumn
	cu_caracter_relleno: string;

	@Column
	@ProtectedColumn
	cu_lado_relleno: string;

	@Column
	@ProtectedColumn
	cu_separador: string;

	@Column
	@ProtectedColumn
	cu_valor_predeterminado: string;

	@Column
	@ProtectedColumn
	cu_caracteres_no_permitidos: string;

	@Column
	@ProtectedColumn
	nu_posicion: number;
}