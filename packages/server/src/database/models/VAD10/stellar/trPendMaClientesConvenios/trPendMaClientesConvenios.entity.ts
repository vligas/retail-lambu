import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_MA_CLIENTES_CONVENIOS',
})
export class TrPendMaClientesConvenios extends ExtendedModel<TrPendMaClientesConvenios> {
	protectedTable = true

	@Column
	@ProtectedColumn
	c_codcliente: string;

	@Column
	@ProtectedColumn
	tipo: number;

	@Column
	@ProtectedColumn
	clave: string;

	@Column
	@ProtectedColumn
	n_porcentaje: number;

	@Column
	@ProtectedColumn
	ident: string;

	@Column
	@ProtectedColumn
	descripcion: string;

	@Column
	@ProtectedColumn
	restringido: boolean;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;

	@Column
	@ProtectedColumn
	tipo_cambio: number;
}