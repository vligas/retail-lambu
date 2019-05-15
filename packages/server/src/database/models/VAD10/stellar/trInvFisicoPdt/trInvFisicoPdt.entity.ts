import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_INV_FISICO_PDT',
})
export class TrInvFisicoPdt extends ExtendedModel<TrInvFisicoPdt> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigo: string;

	@Column
	@ProtectedColumn
	cs_codigoalterno: string;

	@Column
	@ProtectedColumn
	cs_descripcion: string;

	@Column
	@ProtectedColumn
	ns_cantibul: number;

	@Column
	@ProtectedColumn
	ns_costo: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cs_operador: string;

	@Column
	@ProtectedColumn
	ns_cantidad: number;

	@Column
	@ProtectedColumn
	ns_decimales: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	IDProceso: string;
}