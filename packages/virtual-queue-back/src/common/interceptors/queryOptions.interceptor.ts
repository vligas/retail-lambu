import { Injectable, NestInterceptor, ExecutionContext, Inject, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import { logger } from '../services/logger.service';
import { Options } from '../interfaces/options.interface';
import { ServiceOptions } from '../interfaces/serviceOptions.interface';
import { Sequelize, Model } from 'sequelize-typescript';
import { DATABASEVAD10 } from 'src/database/database.providers';
import sequelize = require('sequelize');

@Injectable()
export class QueryOptionsInterceptor<T> implements NestInterceptor<T, T> {

    constructor(private readonly reflector: Reflector,
        @Inject(DATABASEVAD10) private db: Sequelize) { }

    intercept(
        context: ExecutionContext,
        next: CallHandler,
        ): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const handler = context.getHandler();
        const options = this.getOptionsFromQueryString(req.query, handler);
        req.queryOptions = options;
        return next.handle();
    }

    private getOptionsFromQueryString(query: any, handler: Function) {
        const maxPageSize = this.reflector.get<number>('pagination', handler);
        const where = this.reflector.get<any>('where', handler);
        const fields = this.reflector.get<string[]>('fields', handler);
        const includes = this.reflector.get<Array<Model<any> | [string, Model<any>]>>('includes', handler);

        const result: ServiceOptions = {
            include: [],
            fields: [],
            query: {},
            pageSize: maxPageSize,
            page: 1
        };
        
        // tslint:disable-next-line:forin
        for (const key in query) {
            if (this.isFilterKey(key)) {
                const parts = key.split('.');
                if (this.isValidQueryString(parts, { where, fields, includes })) {
                    
                    parts.shift(); /// quitas el 'filter'
                    switch (parts[0]) {

                        case 'where': {
                            let parameter = result.query[parts[1]];
                            
                            if (!parameter) {
                                parameter = {};
                            }
                            const op = {
                                // [`$${parts[2]}`]: query[key],
                                [this.getOp(parts[2])]: query[key],
                            };

                            parameter = {
                                ...parameter,
                                ...op
                            };
                            result.query = {
                                ...result.query,
                                [parts[1]]: parameter
                            };
                            break;
                        }

                        case 'fields': {
                            result.fields = query[key];
                            break;
                        }

                        case 'include': {
                            const entity = this.db.models[parts[3]];
                            result.include.push(entity);
                            break;
                        }

                        case 'page': {
                            result.page = parseInt(query[key], 10);
                            break;
                        }

                        case 'pageSize': {
                            result.pageSize = parseInt(query[key], 10);
                            break;
                        }

                        default: {
                            logger.error(`The filter ${parts[0]} have not been configurated`);
                        }
                    }
                }
            }
        }
        return result;
    }

    private isValidQueryString(parts: string[], options: any) {

        switch (parts.length) {
            case 4: {
                if (options.where && options.where.hasOwnProperty(parts[2]) && parts[1] === 'where') {
                    return true;
                }
                break;
            }

            case 3: {
                if (parts[1] === 'include' && options.includes.find(inc => inc === parts[3] || inc === parts[3])) {
                    return true;
                }
            }


            case 2: {
                if ((parts[1] === 'page' || parts[1] === 'pageSize' || parts[1] === 'fields') ) {
                    return true;
                }
                break;
            }

            default: {
                return false;
            }


        }
        return false;
    }

    private isFilterKey(key: string) {
        return key.substring(0, 7) === 'filter.';
    }

    private getOp(key: string) {
        let op= null;
        switch(key.toLowerCase()){
            case 'like': {
                op= sequelize.Op.like;
                break
            }

            case 'eq': {
                op= sequelize.Op.eq;
                break
            }

            case 'gt': {
                op= sequelize.Op.gt;
                break
            }

            case 'lt': {
                op= sequelize.Op.lt;
                break
            }

            case 'gte': {
                op= sequelize.Op.gte;
                break
            }

            case 'gte': {
                op= sequelize.Op.gte;
                break
            }

            case 'ne': {
                op= sequelize.Op.ne;
                break
            }

            default: {
                logger.error(`The operator ${key} have not been configurated`);
            }
        }
        return op;
    }

}
