import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'ESTRUC_REPORT',
})
export class EstrucReport extends ExtendedModel<EstrucReport> {
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
	ruta: string;

	@Column
	@ProtectedColumn
	seimprime: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	orden: string;

	@Column
	@ProtectedColumn
	ordenar: number;

	@Column
	@ProtectedColumn
	replaceone: number;

	@Column
	@ProtectedColumn
	ENCABEZADO: number;

	@Column
	@ProtectedColumn
	distribuyeenhoja: number;
}