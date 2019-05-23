import { Table, Column, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
@Table({
  tableName: 'L0200mdTurns',
})
export class VirtualQueue extends ExtendedModel<VirtualQueue> {

  @Column
  name: string;

  @Column
  actualTurn: number;
  @Column
  limitTurn: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

}
