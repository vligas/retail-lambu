import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ESTRUC_ORG',
})
export class EstrucOrg extends ExtendedModel<EstrucOrg> {
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

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;
}