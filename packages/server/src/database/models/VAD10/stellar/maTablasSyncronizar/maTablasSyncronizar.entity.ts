import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_TABLAS_SYNCRONIZAR',
})
export class MaTablasSyncronizar extends ExtendedModel<MaTablasSyncronizar> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cu_descripcion: string;

	@Column
	@ProtectedColumn
	cu_mensaje: string;

	@Column
	@ProtectedColumn
	cu_mensajeEliminar: string;

	@Column
	@ProtectedColumn
	cu_tabla_maestra: string;

	@Column
	@ProtectedColumn
	cu_campob_maestra: string;

	@Column
	@ProtectedColumn
	cu_tabla_TR: string;

	@Column
	@ProtectedColumn
	cu_campob_TR: string;

	@Column
	@ProtectedColumn
	cu_tabla_tr_pend: string;

	@Column
	@ProtectedColumn
	cu_campob_tr_pend: string;

	@Column
	@ProtectedColumn
	nu_proceso: number;

	@Column
	@ProtectedColumn
	cu_camposExepcion: string;

	@Column
	@ProtectedColumn
	cu_camposExepcionTr: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codtablassyncronizar: number;

	@Column
	@ProtectedColumn
	cu_criteriorrestriction: string;

	@Column
	@ProtectedColumn
	bs_maneja_inventario: boolean;

	@Column
	@ProtectedColumn
	cu_concepto: string;
}