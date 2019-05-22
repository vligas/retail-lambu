import { Table, Column, Model, Unique, BelongsToMany, BelongsTo, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';
import { Role } from '../role/role.entity';
import { UserRole } from '../userRole/userRole.entity';
import { Permission } from '../permission/permission.entity';
import { UserPermission } from '../userPermission/userPermission.entity';
import { MaSucursales } from '../stellar/maSucursales/maSucursales.entity';

@Table({
  tableName: 'L0200vwUser'
})
export class User extends ExtendedModel<User> {
  isProtectedTable = true;

  @Column
  @ProtectedColumn
  codusuario: string;

  @Column
  @ProtectedColumn
  password: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  login_name: string;

  @Column
  @ProtectedColumn
  descripcion: string;

  @Column
  @ProtectedColumn
  localidad: string;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Nivel: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  Vendedor: number;

  @Column
  @ProtectedColumn
  // tslint:disable-next-line:variable-name
  tipo_usuario: boolean;

  @Column
  @ProtectedColumn
  MOD_PRECIO_VENTA: boolean;

  @Column
  @ProtectedColumn
  MOD_COSTO_COMPRA: boolean;

  @Column
  @ProtectedColumn
  BU_CAMBIA_CLAVE: number;


  @Column
  @ProtectedColumn
  BS_ACTIVO: boolean;

  @Column
  userId: number;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @BelongsToMany(() => Permission, () => UserPermission)
  permissions: Permission[];


  @BelongsTo(() => MaSucursales, { 
      foreignKey: 'localidad', 
      targetKey: 'C_codigo'
  }) 
  sucursales: MaSucursales[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column
  createdBy: string;

  @Column
  updatedBy: string;

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

  

}