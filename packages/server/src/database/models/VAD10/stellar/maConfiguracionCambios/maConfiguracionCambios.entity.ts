import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ma_configuracion_cambios',
})
export class MaConfiguracionCambios extends ExtendedModel<MaConfiguracionCambios> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_documento: string;

	@Column
	@ProtectedColumn
	cs_ruta: string;

	@Column
	@ProtectedColumn
	bs_rtf: boolean;

	@Column
	@ProtectedColumn
	nu_cambiomax: number;

	@Column
	@ProtectedColumn
	nu_cambiomin: number;

	@Column
	@ProtectedColumn
	nu_antiguedadmin: number;

	@Column
	@ProtectedColumn
	nu_acummin: number;

	@Column
	@ProtectedColumn
	nu_valorpuntocargo: number;

	@Column
	@ProtectedColumn
	nu_valorpuntodescargo: number;

	@Column
	@ProtectedColumn
	nu_tipopremio: number;

	@Column
	@ProtectedColumn
	nu_porcprodcambiar: number;
}