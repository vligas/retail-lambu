import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_CAMBIOS_PREMIOS',
})
export class TrCambiosPremios extends ExtendedModel<TrCambiosPremios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_documento: string;

	@Column
	@ProtectedColumn
	cs_codigopremio: string;

	@Column
	@ProtectedColumn
	cs_descripremio: string;

	@Column
	@ProtectedColumn
	ns_valor: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	cs_tipo: string;

	@Column
	@ProtectedColumn
	ns_cantidad: number;

	@Column
	@ProtectedColumn
	nu_tipopremio: number;

	@Column
	@ProtectedColumn
	CS_SUCURSAL: string;

	@Column
	@ProtectedColumn
	ns_valorcambio: number;
}