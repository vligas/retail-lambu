import { Module, DynamicModule} from '@nestjs/common'
import { Sequelize, Model } from 'sequelize-typescript';


@Module({})
export class EntityModule {
    static forFeature(entidades: typeof Model[]): DynamicModule {
        const result = entidades.map(entidad => {
            return {
                provide: entidad,
                useValue: entidad
            }
        })

        return {
            module: EntityModule,
            providers: result,
            exports: result
        }
    }
}