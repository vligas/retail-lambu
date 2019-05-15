import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_FORMATO_BANCOS',
})
export class TrFormatoBancos extends ExtendedModel<TrFormatoBancos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoFormato: string;

	@Column
	@ProtectedColumn
	nu_largo: number;

	@Column
	@ProtectedColumn
	cu_caracterRelleno: string;

	@Column
	@ProtectedColumn
	cu_alineacion: string;

	@Column
	@ProtectedColumn
	cu_tipo: string;

	@Column
	@ProtectedColumn
	cu_valor: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	nu_orden: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	nu_linea: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_posicion: string;

	@Column
	@ProtectedColumn
	cu_separadorDecimal: string;

	@Column
	@ProtectedColumn
	cu_formatoFecha: string;

	@Column
	@ProtectedColumn
	cu_tipoCampo: string;

	@Column
	@ProtectedColumn
	nu_cantidadDecimal: number;
}