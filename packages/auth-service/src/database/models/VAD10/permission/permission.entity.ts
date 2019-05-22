import { Table, Column, HasMany, BelongsToMany, UpdatedAt, CreatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Role } from '../role/role.entity';
import { RolePermission } from '../rolePermission/rolePermission.entity';
import { User } from '../user/user.entity';
import { UserPermission } from '../userPermission/userPermission.entity';

@Table({
  tableName: 'L0200mdPermission',
})
export class Permission extends ExtendedModel<Permission> {
  @Column
  name: string;

  @Column
  description: string;

  @BelongsToMany(() => Role, () => RolePermission)
  roles: Role[];

  @BelongsToMany(() => User, () => UserPermission)
  users: User[];

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
    targetKey: 'codusuario',
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