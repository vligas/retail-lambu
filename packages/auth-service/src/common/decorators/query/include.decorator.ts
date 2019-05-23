import { SetMetadata } from '@nestjs/common';
import { Model } from 'sequelize-typescript';


export const Include = (options: Array<Model<any> | [Model<any>, string]>) => {
    return SetMetadata('includes', options);
};
