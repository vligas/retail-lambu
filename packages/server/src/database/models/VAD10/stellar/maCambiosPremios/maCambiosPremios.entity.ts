import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CAMBIOS_PREMIOS',
})
export class MaCambiosPremios extends ExtendedModel<MaCambiosPremios> {
	protectedTable = true

	@Column({primaryKey: true})
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
	CS_SUCURSAL: string;
}