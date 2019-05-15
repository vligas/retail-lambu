import { TmpComprobante } from './tmpComprobante.entity';
import { Provider } from '@nestjs/common';

export const tmpComprobanteProviders: Provider[] = [
    {
        provide: TmpComprobante,
        useValue: TmpComprobante,
    }
];