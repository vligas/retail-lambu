import { TrPuntoventasTmp } from './trPuntoventasTmp.entity';
import { Provider } from '@nestjs/common';

export const trPuntoventasTmpProviders: Provider[] = [
    {
        provide: TrPuntoventasTmp,
        useValue: TrPuntoventasTmp,
    }
];