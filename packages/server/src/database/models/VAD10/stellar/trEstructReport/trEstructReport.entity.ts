import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_ESTRUCT_REPORT',
})
export class TrEstructReport extends ExtendedModel<TrEstructReport> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_CODIGO_REPORTE: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_CAMPO: string;

	@Column
	@ProtectedColumn
	cs_DESCRIPCION: string;

	@Column
	@ProtectedColumn
	cs_NOMBRE_VARIABLE: string;

	@Column
	@ProtectedColumn
	cs_TIPOCAMPO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	cu_FORMATONUMERICO: number;

	@Column
	@ProtectedColumn
	cu_CANTIDADEDECIMALES: number;

	@Column
	@ProtectedColumn
	Cu_Activo: number;
}