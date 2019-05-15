import { IsInt } from "class-validator";

export class RequestToAssignRouterDto {
    @IsInt()
    id: number;
}

export class RequestUpdateRouterDto {
    
    branchOffices: RequestToAssignRouterDto[];
}