import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ResponseAllVirtualQueueDto {
    id: number;
    name: string;
    actualTurn: number;
    limitTurn: number;
}
