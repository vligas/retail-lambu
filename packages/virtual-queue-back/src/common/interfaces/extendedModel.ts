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
}

//Reflect.defineMetadata(protectedColumns, [], ExtendedModel);