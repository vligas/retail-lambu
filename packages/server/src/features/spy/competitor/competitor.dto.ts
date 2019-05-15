
export class RequestCreateCompetitorDto {

    name: string;

    branchOffices?: number[];
}


export class RequestUpdateCompetitorDto {

    name: string;

    branchOffices?: number[];
}


export interface ResponseCompetitorDto {

    id: number;

    name: string;

    branchOffices: {
        name: string;
        location: string;
        competitorId: number;
    }[];
}
