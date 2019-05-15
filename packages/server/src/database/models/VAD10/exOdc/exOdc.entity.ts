import { Table, Column, Model, Unique, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { User } from '../user/user.entity';

@Table({
  tableName: 'L0200vwOdc',
})
export class ExOdc extends ExtendedModel<ExOdc> {
  @Column({
    primaryKey: true
  })
  @Column
  @ProtectedColumn
  c_DOCUMENTO: string;

  @Column
  @ProtectedColumn
  d_FECHA: Date;

  @Column
  @ProtectedColumn
  c_DESCRIPCION: string;

  @Column
  @ProtectedColumn
  c_status: string;

  @Column
  @ProtectedColumn
  c_CODPROVEEDOR: string;

  @Column
  @ProtectedColumn
  c_CODLOCALIDAD: string;

  @Column
  @ProtectedColumn
  C_CODMONEDA: string;

  @Column
  @ProtectedColumn
  n_FACTORCAMBIO: number;

  @Column
  @ProtectedColumn
  n_DESCUENTO: number;

  @Column
  @ProtectedColumn
  c_OBSERVACION: string;

  @Column
  @ProtectedColumn
  b_backorder: boolean;

  @Column
  @ProtectedColumn
  c_RELACION: string;

  @Column
  @ProtectedColumn
  c_CODCOMPRADOR: string;

  @Column
  @ProtectedColumn
  d_fecha_recepcion: Date;

  @Column
  @ProtectedColumn
  N_SUBTOTAL: number;

  @Column
  @ProtectedColumn
  N_IMPUESTO: number;

  @Column
  @ProtectedColumn
  N_TOTAL: number;

  @Column
  @ProtectedColumn
  C_DESPACHAR: string;

  @Column
  @ProtectedColumn
  DU_FECHAVENCIMIENTO: Date;

  @Column
  @ProtectedColumn
  cs_codlocalidad: string;

  @Column
  @ProtectedColumn
  id: number;

  @Column
  @ProtectedColumn
  cs_requisicion: string;

  @Column
  cod_odc: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @Column
  createdBy: string;

  @Column
  updatedBy: string;

  @Column
  deletedBy: string;

  @BelongsTo(() => User, {
    foreignKey: 'createdBy',
    targetKey: 'codusuario'
  })
  createdByUser: User;

  @BelongsTo(() => User, {
    foreignKey: 'updatedBy',
    targetKey: 'codusuario'
  })
  updatedByUser: User;

  @BelongsTo(() => User, {
    foreignKey: 'deletedBy',
    targetKey: 'codusuario'
  })
  deletedByUser: User;

}