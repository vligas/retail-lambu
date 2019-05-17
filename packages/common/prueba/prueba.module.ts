import { Module, DynamicModule} from '@nestjs/common'
import { PruebaService, PruebaServiceOptions } from './service/prueba.service';


@Module({})
export class PruebaModule {
    static forRoot(cadena: string): DynamicModule {
        return {
            module: PruebaModule,
            providers: [PruebaService, {
                provide: PruebaServiceOptions,
                useValue: {
                    cadena
                }
            }],
            exports: [PruebaService]
        }
    }
}