import { Table, Column, HasMany, BelongsTo, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { CurrencyHistory } from '../currencyHistory/currencyHistory.entity';
import { User } from '../user/user.entity';

@Table({ tableName: 'L0200mdCurrency' })
export class Currency extends ExtendedModel<Currency>{
  @Column
  name: string;

  @Column
  denomination: string;

  @HasMany(() => CurrencyHistory)
  values: CurrencyHistory[];

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