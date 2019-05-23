import { Injectable, NestMiddleware} from '@nestjs/common';
import { logger } from '../services/logger.service';
import { Request, Response } from 'express';
import { RequestContext } from '../interfaces/requestContext.class';
import { getNamespace, createNamespace } from 'node-request-context';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: Function) {
        const rc = new RequestContext(req, res);
        const namespace = getNamespace('retail.request') || createNamespace('retail.request');

        namespace.run(() => {
            namespace.set('tid', rc);
            next();
        });
    }
}