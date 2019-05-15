import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CLIENTES',
})
export class MaClientes extends ExtendedModel<MaClientes> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_CODCLIENTE: string;

	@Column
	@ProtectedColumn
	c_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	c_GRUPO: string;

	@Column
	@ProtectedColumn
	c_RIF: string;

	@Column
	@ProtectedColumn
	C_NIT: string;

	@Column
	@ProtectedColumn
	c_REPRESENTA: string;

	@Column
	@ProtectedColumn
	c_CARGO: string;

	@Column
	@ProtectedColumn
	c_DIRECCION: string;

	@Column
	@ProtectedColumn
	c_CIUDAD: string;

	@Column
	@ProtectedColumn
	c_ESTADO: string;

	@Column
	@ProtectedColumn
	c_PAIS: string;

	@Column
	@ProtectedColumn
	c_EMAIL: string;

	@Column
	@ProtectedColumn
	c_TELEFONO: string;

	@Column
	@ProtectedColumn
	c_FAX: string;

	@Column
	@ProtectedColumn
	c_WEB: string;

	@Column
	@ProtectedColumn
	n_LIMITE: number;

	@Column
	@ProtectedColumn
	n_DIAS: number;

	@Column
	@ProtectedColumn
	N_PRECIO: number;

	@Column
	@ProtectedColumn
	n_DESCUENTO: number;

	@Column
	@ProtectedColumn
	c_OBSERVACIO: string;

	@Column
	@ProtectedColumn
	c_impuesto: string;

	@Column
	@ProtectedColumn
	n_activo: boolean;

	@Column
	@ProtectedColumn
	update_date: Date;

	@Column
	@ProtectedColumn
	add_date: Date;

	@Column
	@ProtectedColumn
	f_cumpleanos: Date;

	@Column
	@ProtectedColumn
	N_TIPO: number;

	@Column
	@ProtectedColumn
	C_CODCLIENTE_REL: string;

	@Column
	@ProtectedColumn
	N_RETENCION: number;

	@Column
	@ProtectedColumn
	nu_tipodescuento: number;

	@Column
	@ProtectedColumn
	N_DiasIntMora: number;

	@Column
	@ProtectedColumn
	N_InteresesMora: number;

	@Column
	@ProtectedColumn
	NU_PUNTOSACUMULADOS: number;

	@Column
	@ProtectedColumn
	RESTRINGIDO: boolean;

	@Column
	@ProtectedColumn
	CS_COMPRADOR: string;

	@Column
	@ProtectedColumn
	cs_codfrecuente: string;

	@Column
	@ProtectedColumn
	bs_contribuyente: boolean;

	@Column
	@ProtectedColumn
	c_Zona: string;

	@Column
	@ProtectedColumn
	c_Ruta: string;

	@Column
	@ProtectedColumn
	c_Coordenadas: string;

	@Column
	@ProtectedColumn
	c_UsuarioAdd: string;

	@Column
	@ProtectedColumn
	c_UsuarioUpd: string;
}