import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_AUDITORIAS',
})
export class MaAuditorias extends ExtendedModel<MaAuditorias> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	Cod_Prod: number;

	@Column
	@ProtectedColumn
	Nom_Prod: string;

	@Column
	@ProtectedColumn
	Tipo: number;

	@Column
	@ProtectedColumn
	Descripcion: string;

	@Column
	@ProtectedColumn
	Evento: string;

	@Column
	@ProtectedColumn
	Fecha: Date;

	@Column
	@ProtectedColumn
	CodUsuario: string;

	@Column
	@ProtectedColumn
	Usuario: string;

	@Column
	@ProtectedColumn
	Ventana: string;

	@Column
	@ProtectedColumn
	TipoObjAuditado: string;

	@Column
	@ProtectedColumn
	CodigoAuditado: string;
}