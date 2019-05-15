import { Table, Column, BelongsTo, ForeignKey, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Currency } from '../currency/currency.entity';
import { User } from '../user/user.entity';

@Table({ tableName: 'L0200mdCurrencyHistory' })
export class CurrencyHistory extends ExtendedModel<CurrencyHistory>{
  @Column
  date: Date;

  @Column
  price: number;

  @ForeignKey(() => Currency)
  @Column
  currencyId: number;

  @BelongsTo(() => Currency)
  currency: Currency;

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