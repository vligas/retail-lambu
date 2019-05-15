import { Table, Column } from 'sequelize-typescript';
import { ExtendedModel } from 'src/common/interfaces/extendedModel';
import { ProtectedColumn } from 'src/common/decorators/protectedColumn.decorator';

@Table
export class CompleteUser extends ExtendedModel<CompleteUser> {
    isViewTable = true;

    @(ProtectedColumn as PropertyDecorator)
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    username: string;

    @Column
    password: string;

    @Column
    cargo: string;

    @Column
    userId: number;
    
}