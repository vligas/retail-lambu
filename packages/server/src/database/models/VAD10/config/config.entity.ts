import { Table, Column, Model, Unique, DataType, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { User } from '../user/user.entity';


@Table({
  tableName: 'L0200mdConfig',
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