import { MaConciliacionautoTextobancoconciliado } from './maConciliacionautoTextobancoconciliado.entity';
import { Provider } from '@nestjs/common';

export const maConciliacionautoTextobancoconciliadoProviders: Provider[] = [
    {
        provide: MaConciliacionautoTextobancoconciliado,
        useValue: MaConciliacionautoTextobancoconciliado,
    }
];