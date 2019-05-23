import { createParamDecorator } from '@nestjs/common';

export const ReqCurrency = createParamDecorator((data, req) => {
    return req.currency;
});
