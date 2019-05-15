import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'CONF_MENU_USER',
})
export class ConfMenuUser extends ExtendedModel<ConfMenuUser> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	clave_user: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	clave_menu: string;

	@Column
	@ProtectedColumn
	texto: string;

	@Column
	@ProtectedColumn
	activado: number;

	@Column
	@ProtectedColumn
	icono: string;

	@Column
	@ProtectedColumn
	forma: string;

	@Column
	@ProtectedColumn
	RELACION: string;

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