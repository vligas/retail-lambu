import { IsOptional } from 'class-validator';

export class RequestUpdateConfigDto {
    @IsOptional()
    'Configuration-1': {
        value: {
            default: Array<{
                path: string;
            }>,
        },
    };
}
