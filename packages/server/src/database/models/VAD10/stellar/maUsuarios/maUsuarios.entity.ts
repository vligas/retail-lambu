import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_USUARIOS',
})
export class MaUsuarios extends ExtendedModel<MaUsuarios> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	codusuario: string;

	@Column
	@ProtectedColumn
	password: string;

	@Column
	@ProtectedColumn
	login_name: string;

	@Column
	@ProtectedColumn
	descripcion: string;

	@Column
	@ProtectedColumn
	clave: string;

	@Column
	@ProtectedColumn
	localidad: string;

	@Column
	@ProtectedColumn
	Nivel: number;

	@Column
	@ProtectedColumn
	Vendedor: number;

	@Column
	@ProtectedColumn
	add_date: Date;

	@Column
	@ProtectedColumn
	update_date: Date;

	@Column
	@ProtectedColumn
	tipo_usuario: boolean;

	@Column
	@ProtectedColumn
	MOD_PRECIO_VENTA: boolean;

	@Column
	@ProtectedColumn
	MOD_COSTO_COMPRA: boolean;

	@Column
	@ProtectedColumn
	BU_CAMBIA_CLAVE: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	BS_ACTIVO: boolean;
}