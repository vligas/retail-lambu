import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_INVENTARIO_REPORTE_TMP',
})
export class MaInventarioReporteTmp extends ExtendedModel<MaInventarioReporteTmp> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_documento: string;

	@Column
	@ProtectedColumn
	c_concepto: string;

	@Column
	@ProtectedColumn
	c_relacion: string;

	@Column
	@ProtectedColumn
	c_codproveedor: string;

	@Column
	@ProtectedColumn
	d_fecha: Date;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	cs_usuario: string;
}