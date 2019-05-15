import { EstrucMenu } from './estrucMenu.entity';
import { Provider } from '@nestjs/common';

export const estrucMenuProviders: Provider[] = [
    {
        provide: EstrucMenu,
        useValue: EstrucMenu,
    }
];