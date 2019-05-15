import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CORRIDAS_AGENTE_CLIENTES',
})
export class MaCorridasAgenteClientes extends ExtendedModel<MaCorridasAgenteClientes> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_documento: string;

	@Column
	@ProtectedColumn
	cs_sucursal: string;

	@Column
	@ProtectedColumn
	ds_fecha: Date;

	@Column({primaryKey: true})
	@ProtectedColumn
	id: number;
}