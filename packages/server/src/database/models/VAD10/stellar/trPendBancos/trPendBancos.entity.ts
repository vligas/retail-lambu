import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_BANCOS',
})
export class TrPendBancos extends ExtendedModel<TrPendBancos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO: string;

	@Column
	@ProtectedColumn
	C_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	C_GRUPO: string;

	@Column
	@ProtectedColumn
	C_OBSERVACIO: string;

	@Column
	@ProtectedColumn
	TIPO_CAMBIO: number;

	@Column
	@ProtectedColumn
	N_IDB: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	bs_verificacionoperaciones_especiales: boolean;

	@Column
	@ProtectedColumn
	cs_mensaje: string;

	@Column
	@ProtectedColumn
	ns_codigooperacion: string;

	@Column
	@ProtectedColumn
	cs_rtfcheque: string;

	@Column
	@ProtectedColumn
	cs_codigobanco_che: string;
}