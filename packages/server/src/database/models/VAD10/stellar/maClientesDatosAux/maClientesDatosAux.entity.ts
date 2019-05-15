import { Table, Column ,Model, Unique } from 'sequelize-typescript';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
	timestamps: false, tableName: 'MA_CLIENTES_DATOS_AUX',
})
export class MaClientesDatosAux extends ExtendedModel<MaClientesDatosAux> {
	protectedTable = true

	@Column
	@ProtectedColumn
	cs_codigo: string;

	@Column
	@ProtectedColumn
	ns_tipocuenta: number;

	@Column
	@ProtectedColumn
	ns_tienetarjeta: number;

	@Column
	@ProtectedColumn
	ns_vacacion: number;

	@Column
	@ProtectedColumn
	ns_tipotarjeta: number;

	@Column
	@ProtectedColumn
	ns_tipoingreso: number;

	@Column
	@ProtectedColumn
	ns_sexo: number;

	@Column
	@ProtectedColumn
	ns_carro: number;

	@Column
	@ProtectedColumn
	ns_computador: number;

	@Column
	@ProtectedColumn
	ns_comprainternet: number;

	@Column
	@ProtectedColumn
	ns_mascota: number;

	@Column
	@ProtectedColumn
	ns_profesion: number;

	@Column
	@ProtectedColumn
	ns_cable: number;

	@Column
	@ProtectedColumn
	cs_banco: string;

	@Column
	@ProtectedColumn
	cs_OtroHobbie: string;

	@Column
	@ProtectedColumn
	cs_tipomascota: string;

	@Column
	@ProtectedColumn
	cs_tipocable: string;

	@Column
	@ProtectedColumn
	cs_profesion: string;

	@Column
	@ProtectedColumn
	ns_estadocivil: number;

	@Column
	@ProtectedColumn
	cs_otroestado: string;

	@Column
	@ProtectedColumn
	ns_Musica: number;

	@Column
	@ProtectedColumn
	ns_Arte: number;

	@Column
	@ProtectedColumn
	ns_Cine: number;

	@Column
	@ProtectedColumn
	cs_TipoDeporte: string;

	@Column
	@ProtectedColumn
	ns_futbol: number;

	@Column
	@ProtectedColumn
	ns_beisbol: number;

	@Column
	@ProtectedColumn
	ns_voleibol: number;

	@Column
	@ProtectedColumn
	ns_natacion: number;

	@Column
	@ProtectedColumn
	ns_basquetbol: number;

	@Column
	@ProtectedColumn
	ns_otrodeporte: number;

	@Column
	@ProtectedColumn
	ns_cocinar: number;

	@Column
	@ProtectedColumn
	ns_decorar: number;

	@Column
	@ProtectedColumn
	ns_leer: number;

	@Column
	@ProtectedColumn
	ns_manualidades: number;

	@Column
	@ProtectedColumn
	ns_otrohobbie: number;

	@Column
	@ProtectedColumn
	ns_paella: number;

	@Column
	@ProtectedColumn
	ns_aves: number;

	@Column
	@ProtectedColumn
	ns_mariscos: number;

	@Column
	@ProtectedColumn
	ns_pastas: number;

	@Column
	@ProtectedColumn
	ns_carnes: number;

	@Column
	@ProtectedColumn
	ns_vegetariana: number;

	@Column
	@ProtectedColumn
	ns_ligera: number;

	@Column
	@ProtectedColumn
	ns_cerveza: number;

	@Column
	@ProtectedColumn
	ns_vino: number;

	@Column
	@ProtectedColumn
	ns_whisky: number;

	@Column
	@ProtectedColumn
	ns_ron: number;

	@Column
	@ProtectedColumn
	ns_otrabebida: number;
}