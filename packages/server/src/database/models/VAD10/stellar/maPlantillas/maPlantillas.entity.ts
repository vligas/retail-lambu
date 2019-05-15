import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PLANTILLAS',
})
export class MaPlantillas extends ExtendedModel<MaPlantillas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	c_cod_plantilla: string;

	@Column
	@ProtectedColumn
	descripcion: string;

	@Column
	@ProtectedColumn
	relacion: string;

	@Column
	@ProtectedColumn
	tiporel: string;

	@Column
	@ProtectedColumn
	clave: string;

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
	campo: string;

	@Column
	@ProtectedColumn
	prioridad: number;

	@Column
	@ProtectedColumn
	fechacreacion: Date;

	@Column
	@ProtectedColumn
	tamanocolgrid: number;

	@Column
	@ProtectedColumn
	tipoproducto: string;

	@Column
	@ProtectedColumn
	campoclave: string;

	@Column
	@ProtectedColumn
	esgrupo: boolean;

	@Column
	@ProtectedColumn
	AutoIntervalo: boolean;
}