import { createParamDecorator } from '@nestjs/common';

export const QueryOptions = createParamDecorator((data, req) => {
    return req.queryOptions;
});
