export interface MediaConfig {
    name: 'Configuration-1';
    json: {
        value: {
            default: Array<{
                path: string;
            }>
        }
    };
}

export type Config = MediaConfig;