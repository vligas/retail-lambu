import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_OFERTAS',
})
export class MaOfertas extends ExtendedModel<MaOfertas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_documento: string;

	@Column
	@ProtectedColumn
	f_desde: Date;

	@Column
	@ProtectedColumn
	f_hasta: Date;

	@Column
	@ProtectedColumn
	h_desde: Date;

	@Column
	@ProtectedColumn
	h_hasta: Date;

	@Column
	@ProtectedColumn
	c_horad: string;

	@Column
	@ProtectedColumn
	c_horah: string;

	@Column
	@ProtectedColumn
	c_status: string;

	@Column
	@ProtectedColumn
	fs_fecha_hora: Date;

	@Column
	@ProtectedColumn
	c_observacion: string;

	@Column
	@ProtectedColumn
	c_usuario: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codlocalidad: string;
}