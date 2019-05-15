import { Injectable, NestMiddleware} from '@nestjs/common';
import { logger } from '../services/logger.service';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: Function) {
        logger.info(`[${req.method}] - ${req.path}\nbody => ${JSON.stringify(req.body)}\nquery => ${JSON.stringify(req.query)}\n`);
        next();
    }
}