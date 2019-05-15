import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_MODIFICACIONESRECMOVIL',
})
export class MaModificacionesrecmovil extends ExtendedModel<MaModificacionesrecmovil> {
	protectedTable = true

	@Column
	@ProtectedColumn
	usuario: string;

	@Column
	@ProtectedColumn
	fecha: Date;

	@Column
	@ProtectedColumn
	numeroODC: string;

	@Column
	@ProtectedColumn
	codigoProveedor: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	documento: string;
}