import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_FORMATO_BANCOS',
})
export class MaFormatoBancos extends ExtendedModel<MaFormatoBancos> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	cu_codigoFormato: string;

	@Column
	@ProtectedColumn
	cu_nombreFormato: string;

	@Column
	@ProtectedColumn
	cu_ubicacion: string;

	@Column
	@ProtectedColumn
	codigoCuentaCorriente: string;

	@Column
	@ProtectedColumn
	codigoCuentaAhorro: string;

	@Column
	@ProtectedColumn
	codigoAbonoCuenta: string;

	@Column
	@ProtectedColumn
	codigoTransferenciaSwift: string;

	@Column
	@ProtectedColumn
	codigoChequeGerencia: string;
}