import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONCILIACIONAUTO_CAMBIOARCHIVO',
})
export class MaConciliacionautoCambioarchivo extends ExtendedModel<MaConciliacionautoCambioarchivo> {
	protectedTable = true

	@Column
	@ProtectedColumn
	codigoBanco: string;

	@Column
	@ProtectedColumn
	codigoCuenta: string;

	@Column
	@ProtectedColumn
	nombreCampo: string;

	@Column
	@ProtectedColumn
	tipoCampo: string;

	@Column
	@ProtectedColumn
	origen: string;

	@Column
	@ProtectedColumn
	destino: string;
}