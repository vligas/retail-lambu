import { MaProdxprov } from './maProdxprov.entity';
import { Provider } from '@nestjs/common';

export const maProdxprovProviders: Provider[] = [
    {
        provide: MaProdxprov,
        useValue: MaProdxprov,
    }
];