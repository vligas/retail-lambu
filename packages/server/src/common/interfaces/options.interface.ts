export interface Options {
    attributes: string[];
    include: any;
    where: any;
    pagination: {
        page: number;
        pageSize: number;
    };
}
