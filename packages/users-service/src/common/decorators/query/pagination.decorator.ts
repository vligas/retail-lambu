import { SetMetadata } from '@nestjs/common';


export const Paginate = (pageSize: number) => {
    return SetMetadata('pagination', pageSize);
};
