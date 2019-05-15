import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_IMPRESORAS_ETIQUETAS',
})
export class TrImpresorasEtiquetas extends ExtendedModel<TrImpresorasEtiquetas> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cCodigo: string;

	@Column
	@ProtectedColumn
	cCaracteres: string;

	@Column
	@ProtectedColumn
	cValorRtf: string;

	@Column
	@ProtectedColumn
	cDescripcion: string;
}