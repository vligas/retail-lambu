import { Table, Column, BelongsToMany, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import {ProtectedColumn} from 'src/common/decorators/protectedColumn.decorator'
@Table({
    timestamps: false, tableName: 'MA_ETIQUETAS',
})
export class Etiqueta extends ExtendedModel<Etiqueta> {
    protectedTable = true

	@Column({primaryKey: true})
	@ProtectedColumn
	C_CODIGO:string;

	@Column
	@ProtectedColumn
	C_DESCRIPCIO: string;

	@Column
	@ProtectedColumn
	C_LONGITUD: string;

	@Column
	@ProtectedColumn
	N_LONGITUD: number;

	@Column
	@ProtectedColumn
	N_POS_INI_1: number;

	@Column
	@ProtectedColumn
	N_CARACTERES_1: number;

	@Column
	@ProtectedColumn
	C_CAMPO: number;

	@Column
	@ProtectedColumn
	N_CARACTERES_2: number;

	@Column
	@ProtectedColumn
	B_MANEJA_DECIMAL: number;

    @Column
	@ProtectedColumn
    N_POS_INI_2: number;
    
	@Column
	@ProtectedColumn
	N_POS_INI_3: number;

	@Column
	@ProtectedColumn
	N_CARACTERES_3: number;

	@Column
	@ProtectedColumn
    B_ACTIVA: number;

    @Column
	@ProtectedColumn
	B_VERIFICADIGITO: number;



}