

export interface RequestUpdateConfigDto {
    
    'default-fields-gap': {
        value: {
            defaultPrices: Array<{
                gapper1: string;
                gapper2: string
            }>
        }
    };
}