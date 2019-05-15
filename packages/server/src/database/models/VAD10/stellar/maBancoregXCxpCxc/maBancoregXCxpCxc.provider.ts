import { MaBancoregXCxpCxc } from './maBancoregXCxpCxc.entity';
import { Provider } from '@nestjs/common';

export const maBancoregXCxpCxcProviders: Provider[] = [
    {
        provide: MaBancoregXCxpCxc,
        useValue: MaBancoregXCxpCxc,
    }
];