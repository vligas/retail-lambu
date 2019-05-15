import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_PROVEEDORES_DATOSBANCARIOS',
})
export class MaProveedoresDatosbancarios extends ExtendedModel<MaProveedoresDatosbancarios> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	codigoProveedor: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	Banco: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	numeroCuenta: string;

	@Column
	@ProtectedColumn
	cuentahabiente: string;

	@Column
	@ProtectedColumn
	tipoCuenta: string;

	@Column
	@ProtectedColumn
	tipoPago: string;

	@Column
	@ProtectedColumn
	codigoSwift: string;

	@Column
	@ProtectedColumn
	codigoAba: string;

	@Column
	@ProtectedColumn
	idBeneficiario: string;
}