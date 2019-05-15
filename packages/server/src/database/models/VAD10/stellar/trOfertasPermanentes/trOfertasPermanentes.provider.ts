import { TrOfertasPermanentes } from './trOfertasPermanentes.entity';
import { Provider } from '@nestjs/common';

export const trOfertasPermanentesProviders: Provider[] = [
    {
        provide: TrOfertasPermanentes,
        useValue: TrOfertasPermanentes,
    }
];