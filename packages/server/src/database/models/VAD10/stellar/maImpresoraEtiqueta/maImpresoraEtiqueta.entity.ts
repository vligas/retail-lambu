import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_IMPRESORA_ETIQUETA',
})
export class MaImpresoraEtiqueta extends ExtendedModel<MaImpresoraEtiqueta> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_descripcion: string;
}