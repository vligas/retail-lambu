import { Table, Column, ForeignKey, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { User } from '../user/user.entity';
import { Permission } from '../permission/permission.entity';

/***
 * CANDIDATA SERIA A SER LA TABLA CON EL NOMBR EMAS FEO DE LA BASE DE DATOS
 */
@Table({
  tableName: 'L0200mdUserPermission',
})
export class UserPermission extends ExtendedModel<UserPermission> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Permission)
  @Column
  permissionId: number;

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