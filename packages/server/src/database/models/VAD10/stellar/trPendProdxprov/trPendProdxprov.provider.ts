import { TrPendProdxprov } from './trPendProdxprov.entity';
import { Provider } from '@nestjs/common';

export const trPendProdxprovProviders: Provider[] = [
    {
        provide: TrPendProdxprov,
        useValue: TrPendProdxprov,
    }
];