import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class ResponseAllVirtualQueueDto {
    id: number;
    name: string;
    actualTurn: number;
    limitTurn: number;
    color: string;
    pathImg: string;
}

export class RequestCreateVirtualQueueDto {
    name: string;
    actualTurn: number;
    limitTurn: number;
    color: string;
    pathImg: string;
}
