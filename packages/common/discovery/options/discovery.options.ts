import { Injectable } from '@nestjs/common';

@Injectable()
export class DiscoveryOptions {
    app : {
        name: string;
        address: string;
        port: number;
    };

    consul: {
        address: string;
        port: number;
    };
}