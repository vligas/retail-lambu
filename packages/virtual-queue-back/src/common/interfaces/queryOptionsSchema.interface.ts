export type Operators = 'eq' | 'gt' | 'lt' | 'gte' | 'lte' | 'like' | 'ne';


export interface QueryOptionsSchema {
    // #TODO implements fields
    fields: string[];

    where: {
        [key: string]: '*' | Operators[];
    };

    include?: string[];

    // #TODO implement include
    // include: {
    //     [key: string]: string[]
    // };

    maxPageSize: 100;
}