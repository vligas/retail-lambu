import { ConfigurarDoc } from './configurarDoc.entity';
import { Provider } from '@nestjs/common';

export const configurarDocProviders: Provider[] = [
    {
        provide: ConfigurarDoc,
        useValue: ConfigurarDoc,
    }
];