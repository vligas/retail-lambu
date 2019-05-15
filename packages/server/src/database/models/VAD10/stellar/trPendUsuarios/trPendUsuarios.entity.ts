import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_USUARIOS',
})
export class TrPendUsuarios extends ExtendedModel<TrPendUsuarios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	CODUSUARIO: string;

	@Column
	@ProtectedColumn
	PASSWORD: string;

	@Column
	@ProtectedColumn
	LOGIN_NAME: string;

	@Column
	@ProtectedColumn
	DESCRIPCION: string;

	@Column
	@ProtectedColumn
	CLAVE: string;

	@Column
	@ProtectedColumn
	LOCALIDAD: string;

	@Column
	@ProtectedColumn
	NIVEL: number;

	@Column
	@ProtectedColumn
	VENDEDOR: number;

	@Column
	@ProtectedColumn
	ADD_DATE: Date;

	@Column
	@ProtectedColumn
	UPDATE_DATE: Date;

	@Column
	@ProtectedColumn
	TIPO_USUARIO: boolean;

	@Column
	@ProtectedColumn
	MOD_PRECIO_VENTA: boolean;

	@Column
	@ProtectedColumn
	MOD_COSTO_COMPRA: boolean;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	BU_CAMBIA_CLAVE: number;

	@Column
	@ProtectedColumn
	BS_ACTIVO: boolean;
}