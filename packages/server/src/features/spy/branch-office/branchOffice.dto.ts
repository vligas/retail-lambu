
export class RequestCreateBranchOfficeDto {

    name: string;

    location: string;

    competitorId: number;
}


export class RequestUpdateBranchOfficeDto {

    name: string;

    location: string;
}


export interface ResponseBranchOfficeDto {

    id: number;

    name: string;

    location: string;

    competitors: {
        id: number;
        name: string;
    };
}
