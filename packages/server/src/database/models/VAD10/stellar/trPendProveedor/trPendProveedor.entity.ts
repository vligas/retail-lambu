import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'TR_PEND_PROVEEDOR',
})
export class TrPendProveedor extends ExtendedModel<TrPendProveedor> {
	protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	c_codproveed: string;

	@Column
	@ProtectedColumn
	c_descripcio: string;

	@Column
	@ProtectedColumn
	c_grupo: string;

	@Column
	@ProtectedColumn
	c_rif: string;

	@Column
	@ProtectedColumn
	c_representa: string;

	@Column
	@ProtectedColumn
	c_cargo: string;

	@Column
	@ProtectedColumn
	c_direccion: string;

	@Column
	@ProtectedColumn
	c_ciudad: string;

	@Column
	@ProtectedColumn
	c_estado: string;

	@Column
	@ProtectedColumn
	c_pais: string;

	@Column
	@ProtectedColumn
	c_email: string;

	@Column
	@ProtectedColumn
	c_telefono: string;

	@Column
	@ProtectedColumn
	c_celular: string;

	@Column
	@ProtectedColumn
	c_fax: string;

	@Column
	@ProtectedColumn
	c_web: string;

	@Column
	@ProtectedColumn
	n_limite: number;

	@Column
	@ProtectedColumn
	n_dias: number;

	@Column
	@ProtectedColumn
	n_porcentaje: number;

	@Column
	@ProtectedColumn
	c_observacio: string;

	@Column
	@ProtectedColumn
	c_nit: string;

	@Column
	@ProtectedColumn
	n_activo: number;

	@Column
	@ProtectedColumn
	update_date: Date;

	@Column
	@ProtectedColumn
	add_date: Date;

	@Column
	@ProtectedColumn
	c_razon: string;

	@Column
	@ProtectedColumn
	c_codreferencial: string;

	@Column
	@ProtectedColumn
	c_contacto_adm: string;

	@Column
	@ProtectedColumn
	c_contacto_ven: string;

	@Column
	@ProtectedColumn
	c_contacto_reg: string;

	@Column
	@ProtectedColumn
	c_contacto_vdd: string;

	@Column
	@ProtectedColumn
	c_email_adm: string;

	@Column
	@ProtectedColumn
	c_email_ven: string;

	@Column
	@ProtectedColumn
	c_email_reg: string;

	@Column
	@ProtectedColumn
	c_email_vdd: string;

	@Column
	@ProtectedColumn
	c_email_fiscal: string;

	@Column
	@ProtectedColumn
	c_email_depo: string;

	@Column
	@ProtectedColumn
	c_telefono_rep: string;

	@Column
	@ProtectedColumn
	c_telefono_adm: string;

	@Column
	@ProtectedColumn
	c_telefono_ven: string;

	@Column
	@ProtectedColumn
	c_telefono_reg: string;

	@Column
	@ProtectedColumn
	c_telefono_vdd: string;

	@Column
	@ProtectedColumn
	c_celular_adm: string;

	@Column
	@ProtectedColumn
	c_celular_ven: string;

	@Column
	@ProtectedColumn
	c_celular_reg: string;

	@Column
	@ProtectedColumn
	c_celular_vdd: string;

	@Column
	@ProtectedColumn
	c_direccion_dep: string;

	@Column
	@ProtectedColumn
	c_ciudad_dep: string;

	@Column
	@ProtectedColumn
	c_estado_dep: string;

	@Column
	@ProtectedColumn
	c_pais_dep: string;

	@Column
	@ProtectedColumn
	c_telefono_dep: string;

	@Column
	@ProtectedColumn
	c_fax_dep: string;

	@Column
	@ProtectedColumn
	c_email_dep: string;

	@Column
	@ProtectedColumn
	c_cod_banco: string;

	@Column
	@ProtectedColumn
	c_cuenta_banco: string;

	@Column
	@ProtectedColumn
	c_cuentahabiente: string;

	@Column
	@ProtectedColumn
	n_dia2: number;

	@Column
	@ProtectedColumn
	n_porcentaje2: number;

	@Column
	@ProtectedColumn
	n_dia3: number;

	@Column
	@ProtectedColumn
	n_porcentaje3: number;

	@Column
	@ProtectedColumn
	c_codlicores: string;

	@Column
	@ProtectedColumn
	n_diasdespacho: number;

	@Column
	@ProtectedColumn
	ESTATUS: number;

	@Column
	@ProtectedColumn
	b_preferencial: boolean;

	@Column
	@ProtectedColumn
	N_RETENCION: number;

	@Column({primaryKey: true})
	@ProtectedColumn
	ID: number;

	@Column
	@ProtectedColumn
	CS_COMPRADOR: string;

	@Column
	@ProtectedColumn
	bu_cualquier_cuenta: boolean;

	@Column
	@ProtectedColumn
	cs_tipo: string;

	@Column
	@ProtectedColumn
	c_rim: string;

	@Column
	@ProtectedColumn
	n_diasreposicion: number;

	@Column
	@ProtectedColumn
	n_diasanalisis: number;

	@Column
	@ProtectedColumn
	n_descaveria: number;

	@Column
	@ProtectedColumn
	b_enviarOdcL: boolean;

	@Column
	@ProtectedColumn
	b_enviarOdcA: boolean;

	@Column
	@ProtectedColumn
	b_enviarOdcV: boolean;

	@Column
	@ProtectedColumn
	b_enviarOdcR: boolean;

	@Column
	@ProtectedColumn
	b_enviarOdcVen: boolean;

	@Column
	@ProtectedColumn
	n_porcentaje_seniat: number;

	@Column
	@ProtectedColumn
	c_UsuarioAdd: string;

	@Column
	@ProtectedColumn
	c_UsuarioUpd: string;
}