import { Table, Column, HasMany, CreatedAt, UpdatedAt, BelongsTo, DeletedAt } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { BranchOffice } from '../branchOffice/branchOffice.entity';
import { User } from '../user/user.entity';

@Table({
  tableName: 'L0200mdCompetitor',
})
export class Competitor extends ExtendedModel<Competitor> {

  @Column
  // tslint:disable-next-line:variable-name
  name: string;

  @HasMany(() => BranchOffice, {
    sourceKey: 'id',
    foreignKey: 'competitorId',
  })
  branchOffices: BranchOffice[];

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