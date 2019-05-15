import { Table, Column, Model, Unique, BelongsTo, UpdatedAt, CreatedAt, DeletedAt } from 'sequelize-typescript';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { User } from '../user/user.entity';

@Table({
  tableName: 'L0200mdCategory',
})
export class Category extends ExtendedModel<Category> {

  @Column
  // tslint:disable-next-line:variable-name
  code: string;

  @Column
  description: string;


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