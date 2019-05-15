import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONFIGURACION_MAIL',
})
export class MaConfiguracionMail extends ExtendedModel<MaConfiguracionMail> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigo: string;

	@Column
	@ProtectedColumn
	cu_descripcion: string;

	@Column
	@ProtectedColumn
	cu_servidor: string;

	@Column
	@ProtectedColumn
	cu_puerto: string;

	@Column
	@ProtectedColumn
	bu_autenticacion: boolean;

	@Column
	@ProtectedColumn
	cu_login: string;

	@Column
	@ProtectedColumn
	cu_password: string;

	@Column
	@ProtectedColumn
	cu_correoEmisor: string;

	@Column
	@ProtectedColumn
	cu_nombreEmisor: string;

	@Column
	@ProtectedColumn
	cu_correoRespuesta: string;
}