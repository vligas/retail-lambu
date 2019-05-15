import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CAMBIOS_PREMIOS_CONSOLIDADOS',
})
export class MaCambiosPremiosConsolidados extends ExtendedModel<MaCambiosPremiosConsolidados> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigocliente: string;

	@Column
	@ProtectedColumn
	ds_fechacambio: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_documento: string;

	@Column
	@ProtectedColumn
	cs_usuario: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_tipo: string;

	@Column
	@ProtectedColumn
	nu_puntos: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_sucursal: string;

	@Column
	@ProtectedColumn
	cs_rif: string;

	@Column
	@ProtectedColumn
	cs_numero_bajada: string;

	@Column
	@ProtectedColumn
	ds_fecha: Date;
}