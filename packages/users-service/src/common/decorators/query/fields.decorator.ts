import { ReflectMetadata } from '@nestjs/common';


export const Fields = (options: any) => {
    return ReflectMetadata('fields', options);
};
