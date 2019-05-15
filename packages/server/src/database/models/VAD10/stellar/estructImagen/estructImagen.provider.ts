import { EstructImagen } from './estructImagen.entity';
import { Provider } from '@nestjs/common';

export const estructImagenProviders: Provider[] = [
    {
        provide: EstructImagen,
        useValue: EstructImagen,
    }
];