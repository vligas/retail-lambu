import { EstrucOrg } from './estrucOrg.entity';
import { Provider } from '@nestjs/common';

export const estrucOrgProviders: Provider[] = [
    {
        provide: EstrucOrg,
        useValue: EstrucOrg,
    }
];