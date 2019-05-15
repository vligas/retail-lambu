import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONCEPTOS',
})
export class MaConceptos extends ExtendedModel<MaConceptos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	IDCONCEPTO: number;

	@Column
	@ProtectedColumn
	DESCRIPCION: string;

	@Column
	@ProtectedColumn
	IDPROCESO: number;

	@Column
	@ProtectedColumn
	DE_SISTEMA: number;

	@Column
	@ProtectedColumn
	Documento: string;

	@Column
	@ProtectedColumn
	Predeterminada: number;

	@Column
	@ProtectedColumn
	nu_nivelusuario: number;

	@Column
	@ProtectedColumn
	bu_activo: boolean;

	@Column
	@ProtectedColumn
	bu_consideraimpuesto: boolean;

	@Column
	@ProtectedColumn
	bu_Conceptodeservicio: boolean;

	@Column
	@ProtectedColumn
	bu_ConsideraLibro: boolean;

	@Column
	@ProtectedColumn
	bu_ConceptoRetencion: boolean;

	@Column
	@ProtectedColumn
	bu_RequiereUnidad: boolean;

	@Column
	@ProtectedColumn
	bu_ConsolidarFactura: boolean;

	@Column
	@ProtectedColumn
	c_Observacion: string;
}