import { TrAutomatico } from './trAutomatico.entity';
import { Provider } from '@nestjs/common';

export const trAutomaticoProviders: Provider[] = [
    {
        provide: TrAutomatico,
        useValue: TrAutomatico,
    }
];