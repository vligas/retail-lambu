import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_OFERTAS_PERMANENTES',
})
export class MaOfertasPermanentes extends ExtendedModel<MaOfertasPermanentes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_codigooferta: string;

	@Column
	@ProtectedColumn
	cs_descripcion: string;

	@Column
	@ProtectedColumn
	cs_departamento: string;

	@Column
	@ProtectedColumn
	cs_grupo: string;

	@Column
	@ProtectedColumn
	cs_subgrupo: string;

	@Column
	@ProtectedColumn
	bs_regulados: boolean;

	@Column
	@ProtectedColumn
	bs_activo: boolean;

	@Column
	@ProtectedColumn
	ns_porcentaje: number;

	@Column
	@ProtectedColumn
	bs_lunes: boolean;

	@Column
	@ProtectedColumn
	bs_martes: boolean;

	@Column
	@ProtectedColumn
	bs_miercoles: boolean;

	@Column
	@ProtectedColumn
	bs_jueves: boolean;

	@Column
	@ProtectedColumn
	bs_viernes: boolean;

	@Column
	@ProtectedColumn
	bs_sabado: boolean;

	@Column
	@ProtectedColumn
	bs_domingo: boolean;

	@Column
	@ProtectedColumn
	bs_Afiliados: boolean;

	@Column
	@ProtectedColumn
	ns_margenUtilidad: number;
}