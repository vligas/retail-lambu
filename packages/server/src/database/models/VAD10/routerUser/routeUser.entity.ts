import { Table, Column, Model, Unique, HasMany, ForeignKey, CreatedAt, UpdatedAt, BelongsTo } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { User } from '../user/user.entity';
import { BranchOffice } from '../branchOffice/branchOffice.entity';

/***
 * CANDIDATA SERIA A SER LA TABLA CON EL NOMBR EMAS FEO DE LA BASE DE DATOS
 */
@Table({
  tableName: 'L0200txRouterUser',
})
export class RouteUser extends ExtendedModel<RouteUser> {

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => BranchOffice)
    @Column
    branchOfficeId: number;

    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column
    createdBy: string;
  
    @Column
    updatedBy: string;
  
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