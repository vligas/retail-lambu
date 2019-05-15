import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ESTRUC_MENU',
})
export class EstrucMenu extends ExtendedModel<EstrucMenu> {
	protectedTable = true

	@Column
	@ProtectedColumn
	Relacion: string;

	@Column
	@ProtectedColumn
	tiporel: string;

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
	pos: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	ResourceId: string;

	@Column
	@ProtectedColumn
	OpcionDisponible: boolean;
}