import { SetMetadata } from '@nestjs/common';


export const Where = (options: any) => {
    return SetMetadata('where', options);
};
