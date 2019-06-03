import { IsOptional } from 'class-validator';

export class RequestUpdateMediaConfigDto {
    @IsOptional()
    'Configuration-1': {
        value: {
            default: Array<{
                path: string;
            }>,
        },
    };
}
