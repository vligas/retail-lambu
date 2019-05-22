import { Table, Column ,Model, Unique, HasMany } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { User } from '../../user/user.entity';

@Table({
	timestamps: false, tableName: 'MA_SUCURSALES',
})
export class MaSucursales extends ExtendedModel<MaSucursales> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_codigo: string;

	@Column
	@ProtectedColumn
	c_descripcion: string;

	@Column
	@ProtectedColumn
	c_direccion: string;

	@Column
	@ProtectedColumn
	c_gerente: string;

	@Column
	@ProtectedColumn
	c_subgerebte: string;

	@Column
	@ProtectedColumn
	c_telefono: string;

	@Column
	@ProtectedColumn
	c_estado: number;

	@Column
	@ProtectedColumn
	c_servidor: string;

	@Column
	@ProtectedColumn
	B_TRASMITIR: boolean;

	@Column
	@ProtectedColumn
	B_ACTVAD10: boolean;

	@Column
	@ProtectedColumn
	c_ciudad: string;

	@Column
	@ProtectedColumn
	c_nombre_cheque: string;

	@Column
	@ProtectedColumn
	cu_DireccionUltimaVersion: string;

	@Column
	@ProtectedColumn
	nu_ActualizarUltimaVersion: number;

	@Column
	@ProtectedColumn
	nu_MensajeUltimaVersion: number;

	/// Relations

	@HasMany(() => User, {
		sourceKey: 'C_codigo',
		foreignKey: 'localidad'
	})
	Users: User[];

}