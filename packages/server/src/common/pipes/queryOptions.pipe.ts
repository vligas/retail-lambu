import { PipeTransform, Injectable, ArgumentMetadata, InternalServerErrorException, BadRequestException, Inject } from '@nestjs/common';
import { QueryOptionsSchema } from '../interfaces/queryOptionsSchema.interface';
import { DATABASEVAD10 } from 'src/database/database.providers';
import { Sequelize } from 'sequelize-typescript';


// tslint:disable-next-line: variable-name
export const QueryOptionsPipe = (schema: QueryOptionsSchema): any => {
    // @Injectable()
    class Pipe implements PipeTransform {
        schema: QueryOptionsSchema;
        constructor(@Inject(DATABASEVAD10) private db: Sequelize) {
            this.schema = schema;
            if (!this.schema.include) {
                this.schema.include = [];
            }
        }
        transform(value: any, metadata: ArgumentMetadata) {
            if (metadata.type !== 'query') {
                throw new InternalServerErrorException(`You can't use QueryOptionsPipe in a argument different than query.`);
            }

            value.query = {};
            value.include = [];
            value.pageSize = this.schema.maxPageSize;
            value.page = 1;

            for (const key in value) {
                if (this.isFilterKey(key)) {
                    const parts = key.split('.');
                    if (!this.isValidQueryString(parts)) {
                        console.log(parts);
                        throw new BadRequestException(`The query ${key}=${value[key]} is invalid. it should be per example filter.where.column.eq=25`);
                    }

                    parts.shift();
                    if (parts[0] === 'where') {
                        let parameter = value.query[parts[1]]
                        if (!parameter) {
                            console.log(value)
                            parameter = {}
                        }
                        const op = {
                            [`$${parts[2]}`]: value[key],
                        }

                        parameter = {
                            ...parameter,
                            ...op
                        }
                        value.query = {
                            ...value.query,
                            [parts[1]]: parameter
                        };
                    }
                    if (parts[0] === 'include') {
                        const model = this.db.models[parts[1]];
                        if (model) {
                            value.include = [...value.include, {
                                model,
                                through: {
                                    attributes: []
                                }
                            }];
                        }
                    }
                    else if (parts[0] === 'pageSize' || parts[0] === 'page') {
                        value[parts[0]] = parseInt(value[key], 10);
                    }

                    delete value[key];
                }
                // # TODO handle invalid properties
            }
            console.log(value);
            return value;
        }

        private isFilterKey(key: string) {
            return key.substring(0, 7) === 'filter.';
        }

        private isValidQueryString(parts: string[]) {
            if (parts.length === 4) {
                console.log(this.schema.where, parts[2]);
                if (this.schema.where.hasOwnProperty(parts[2]) && parts[1] === 'where') {
                    return true;
                }
            }
            else if (parts.length === 3) {
                if (parts[1] === 'include' && this.schema.include.find(i => i === parts[2])) {
                    return true;
                }
            }
            else if (parts.length === 2) {
                if ((parts[1] === 'page' || parts[1] === 'pageSize')) {
                    return true;
                }

            }

            return false;
        }
    }

    return Pipe;
};
