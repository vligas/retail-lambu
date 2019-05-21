
export interface RequestCreateCompetitorDto {

    name: string;

    branchOffices?: number[];
}


export interface RequestUpdateCompetitorDto {

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
