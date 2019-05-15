import { MaReportesDatos } from './maReportesDatos.entity';
import { Provider } from '@nestjs/common';

export const maReportesDatosProviders: Provider[] = [
    {
        provide: MaReportesDatos,
        useValue: MaReportesDatos,
    }
];