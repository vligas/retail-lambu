
export interface RequestCreateCompetitorDto {

    name: string;

    branchOffices?: number[];
}


export interface RequestUpdateCompetitorDto {

    id: number;

    name: string;

    branchOffices?: number[];
}


export interface ResponseCompetitorDto {

    id: number;

    name: string;

    branchOffices: {
        id: number;
        name: string;
        location: string;
        competitorId: number;
    }[];
}

export interface RequestCompetitorBrandDto {
    id: number;
    name: string;
    location: string;
    competitorId: number;
}


