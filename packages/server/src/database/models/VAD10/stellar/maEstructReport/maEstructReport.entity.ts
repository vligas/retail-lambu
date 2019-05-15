import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_ESTRUCT_REPORT',
})
export class MaEstructReport extends ExtendedModel<MaEstructReport> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Relacion: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	Clave: string;

	@Column
	@ProtectedColumn
	texto: string;

	@Column
	@ProtectedColumn
	imagen: string;

	@Column
	@ProtectedColumn
	tag: string;

	@Column
	@ProtectedColumn
	ruta: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	NiveldeOrden: number;

	@Column
	@ProtectedColumn
	ModoImpresion: number;

	@Column
	@ProtectedColumn
	puerto: string;
}