import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PRODUCTOS_ARCHIVO_EXISTENTE',
})
export class MaProductosArchivoExistente extends ExtendedModel<MaProductosArchivoExistente> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigoprod: string;

	@Column
	@ProtectedColumn
	cs_codigoprov: string;

	@Column
	@ProtectedColumn
	cs_descriprod: string;

	@Column
	@ProtectedColumn
	cs_motivo: string;

	@Column
	@ProtectedColumn
	ds_fecha: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}