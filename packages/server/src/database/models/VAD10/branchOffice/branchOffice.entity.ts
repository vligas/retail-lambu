import { Table, Column, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { Competitor } from '../competitor/competitor.entity';
import { User } from '../user/user.entity';
import { RouteUser } from '../routerUser/routeUser.entity';

@Table({
  tableName: 'L0200mdBranchOffice',
})
export class BranchOffice extends ExtendedModel<BranchOffice> {

  @Column
  // tslint:disable-next-line:variable-name
  name: string;

  @Column
  location: string;

  @ForeignKey(() => Competitor)
  @Column
  competitorId: number;

  @BelongsTo(() => Competitor, {
    foreignKey: 'competitorId',
    targetKey: 'id'
  })
  competitor: Competitor;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column
  createdBy: string;

  @Column
  updatedBy: string;

  @BelongsToMany(() => User, () => RouteUser)
  users: User[];

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