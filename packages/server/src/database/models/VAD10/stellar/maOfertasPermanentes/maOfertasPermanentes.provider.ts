import { MaOfertasPermanentes } from './maOfertasPermanentes.entity';
import { Provider } from '@nestjs/common';

export const maOfertasPermanentesProviders: Provider[] = [
    {
        provide: MaOfertasPermanentes,
        useValue: MaOfertasPermanentes,
    }
];