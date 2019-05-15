import { MaBancoConcilia } from './maBancoConcilia.entity';
import { Provider } from '@nestjs/common';

export const maBancoConciliaProviders: Provider[] = [
    {
        provide: MaBancoConcilia,
        useValue: MaBancoConcilia,
    }
];