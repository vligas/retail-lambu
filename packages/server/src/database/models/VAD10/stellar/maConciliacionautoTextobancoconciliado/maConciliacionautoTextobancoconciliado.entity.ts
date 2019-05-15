import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CONCILIACIONAUTO_TEXTOBANCOCONCILIADO',
})
export class MaConciliacionautoTextobancoconciliado extends ExtendedModel<MaConciliacionautoTextobancoconciliado> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	codigoBanco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	montoBanco: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	fechaBanco: Date;

	@Column
	@ProtectedColumn
	codigoStellar: string;
}