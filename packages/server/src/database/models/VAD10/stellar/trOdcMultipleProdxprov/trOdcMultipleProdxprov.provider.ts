import { TrOdcMultipleProdxprov } from './trOdcMultipleProdxprov.entity';
import { Provider } from '@nestjs/common';

export const trOdcMultipleProdxprovProviders: Provider[] = [
    {
        provide: TrOdcMultipleProdxprov,
        useValue: TrOdcMultipleProdxprov,
    }
];