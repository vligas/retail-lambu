import { TrPagoElectronico } from './trPagoElectronico.entity';
import { Provider } from '@nestjs/common';

export const trPagoElectronicoProviders: Provider[] = [
    {
        provide: TrPagoElectronico,
        useValue: TrPagoElectronico,
    }
];