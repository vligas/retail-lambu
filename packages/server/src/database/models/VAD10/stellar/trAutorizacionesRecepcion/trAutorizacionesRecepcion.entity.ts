import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_AUTORIZACIONES_RECEPCION',
})
export class TrAutorizacionesRecepcion extends ExtendedModel<TrAutorizacionesRecepcion> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Usuario: string;

	@Column
	@ProtectedColumn
	Recepcion: string;

	@Column
	@ProtectedColumn
	Producto: string;
}