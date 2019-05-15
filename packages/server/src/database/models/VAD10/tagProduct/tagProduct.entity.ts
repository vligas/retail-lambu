import { Table, Column, Model, Unique, HasMany, ForeignKey, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Tag } from '../tag/tag.entity';
import { Product } from '../exProduct/product.entity';
import { User } from '../user/user.entity';

/***
 * CANDIDATA SERIA A SER LA TABLA CON EL NOMBR EMAS FEO DE LA BASE DE DATOS
 */
@Table({
  tableName: 'L0200mdTagProduct',
})
export class TagProduct extends ExtendedModel<TagProduct> {
  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

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