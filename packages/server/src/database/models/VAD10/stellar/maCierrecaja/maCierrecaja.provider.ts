import { MaCierrecaja } from './maCierrecaja.entity';
import { Provider } from '@nestjs/common';

export const maCierrecajaProviders: Provider[] = [
    {
        provide: MaCierrecaja,
        useValue: MaCierrecaja,
    }
];