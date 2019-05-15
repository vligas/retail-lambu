import { Table, Column, Model, Unique, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Product } from '../exProduct/product.entity';
import { User } from '../user/user.entity';


@Table({
  tableName: 'L0200mdCompetitorPrice'
})
export class CompetitorPrice extends ExtendedModel<CompetitorPrice>{

  @Column
  price: number;

  @ForeignKey(() => Product)
  @Column
  productId: string;

  @Column
  branchId: number;

  @Column
  image: string;

  // @ForeignKey(() => User)
  // @Column
  // userId: string;

  // @ForeignKey(() => Product)
  // @Column
  // userId: string;

  @BelongsTo(() => Product, { targetKey: 'c_Codigo' })
  product: Product;

  // @BelongsTo(() => User, { targetKey: 'codusuario' })
  // user: User;

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