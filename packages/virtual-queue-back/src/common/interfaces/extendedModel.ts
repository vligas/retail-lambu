import { Model } from 'sequelize-typescript';
import { InternalServerErrorException } from '@nestjs/common';

const invalidMethod = (instance, method: string) => {
    throw new InternalServerErrorException(`You can't call '${method}' on ${instance}`);
};

type T = any;

export class ExtendedModel<T> extends Model<ExtendedModel<T>> {
    isViewTable = false;
    isProtectedTable = false;
}

//Reflect.defineMetadata(protectedColumns, [], ExtendedModel);