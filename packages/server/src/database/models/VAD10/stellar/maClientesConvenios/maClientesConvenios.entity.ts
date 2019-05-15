import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CLIENTES_CONVENIOS',
})
export class MaClientesConvenios extends ExtendedModel<MaClientesConvenios> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codcliente: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	tipo: number;

	@Column({primaryKey: true})
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

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	RESTRINGIDO: boolean;
}