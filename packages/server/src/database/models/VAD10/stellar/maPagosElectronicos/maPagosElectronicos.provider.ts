import { MaPagosElectronicos } from './maPagosElectronicos.entity';
import { Provider } from '@nestjs/common';

export const maPagosElectronicosProviders: Provider[] = [
    {
        provide: MaPagosElectronicos,
        useValue: MaPagosElectronicos,
    }
];