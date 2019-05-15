import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_REQUISICION_DEPOSITO',
})
export class MaRequisicionDeposito extends ExtendedModel<MaRequisicionDeposito> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_DOCUMENTO: string;

	@Column
	@ProtectedColumn
	DS_FECHA: Date;

	@Column
	@ProtectedColumn
	CS_ESTADO: string;

	@Column({primaryKey: true})
	@ProtectedColumn
	CS_CODLOCALIDAD: string;

	@Column
	@ProtectedColumn
	CS_OBSERVACION: string;

	@Column
	@ProtectedColumn
	CS_RELACION: string;

	@Column
	@ProtectedColumn
	CS_CODOPERADOR: string;

	@Column
	@ProtectedColumn
	DS_FECHA_TOPE: Date;

	@Column
	@ProtectedColumn
	CS_DEPOSITO_SOLICITUD: string;

	@Column
	@ProtectedColumn
	CS_DEPOSITO_DESPACHAR: string;

	@Column
	@ProtectedColumn
	NU_ESTADO_INTERNO: number;

	@Column
	@ProtectedColumn
	NU_PRIORIDAD: number;

	@Column
	@ProtectedColumn
	CS_CODMONEDA: string;

	@Column
	@ProtectedColumn
	NS_FACTOR_CAMBIO: number;
}