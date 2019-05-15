export interface GapConfig {
    name: 'default-fields-gap';
    json: {
        value: {
            defaultPrices: Array<{
                gapper1: string
                gapper2: string
            }>
        }
    };
}

export type Config = GapConfig;