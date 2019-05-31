import { Table, Column, Model, Unique, DataType, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';

@Table({
  tableName: 'L0200mdConfiguration',
})
export class Config extends ExtendedModel<Config> {

  @Column
  name: string;

  @Column(DataType.TEXT)
  get json(): any {
    return JSON.parse(this.getDataValue('json'));
  }

  set json(value: any) {
    this.setDataValue('json', JSON.stringify(value));
  }

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
}
