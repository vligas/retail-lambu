import { Table, Column, Model, Unique, HasMany, BelongsToMany, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Product } from '../exProduct/product.entity';
import { TagProduct } from '../tagProduct/tagProduct.entity';
import { User } from '../user/user.entity';

@Table({
  tableName: 'L0200mdTag',
})
export class Tag extends ExtendedModel<Tag> {
  @Column
  // tslint:disable-next-line:variable-name
  name: string;


  @BelongsToMany(() => Product, () => TagProduct)
  exProducts: Product[];

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