import { Model, Table, BeforeUpdate, BeforeCreate, BeforeDestroy, BeforeBulkDestroy } from 'sequelize-typescript';
import { InternalServerErrorException } from '@nestjs/common';
import { ProtectedColumn, protectedColumns } from '../decorators/protectedColumn.decorator';
import * as MssqlDriver from 'sequelize/lib/dialects/mssql';
import { RequestContext } from './requestContext.class';

const invalidMethod = (instance, method: string) => {
    throw new InternalServerErrorException(`You can't call '${method}' on ${instance}`);
};

type T = any;

export class ExtendedModel<T> extends Model<ExtendedModel<T>> {
    isViewTable = false;
    isProtectedTable = false;

    @BeforeCreate
    static attachCreateUser(instance: any) {
        const currentUser = RequestContext.currentUser();
        if (currentUser) {
            instance.setDataValue('createdBy', currentUser.codusuario);
        }
    }

    @BeforeUpdate
    static attachUpdateUser(instance: any) {
        const currentUser = RequestContext.currentUser();
        if (currentUser) {
            instance.setDataValue('updatedBy', currentUser.codusuario);
        }
    }

    @BeforeDestroy
    static attachDeleteUser(instance: any) {
        const currentUser = RequestContext.currentUser();
        if (currentUser) {
            instance.setDataValue('deletedBy', currentUser.codusuario);
        }
    }

    @BeforeBulkDestroy
    static attachBulkDeleteUser(instance: any[]) {
    }
}

//Reflect.defineMetadata(protectedColumns, [], ExtendedModel);