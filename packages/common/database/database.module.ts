import { Module, DynamicModule, Global, Provider } from '@nestjs/common';
import { Sequelize, Model } from 'sequelize-typescript';

interface DatabaseConnectionOptions {
    token: string;
    username: string;
    password: string;
    dialect: string;
    host: string;
    logging: boolean;
    port: number;
    database: string;
    benchmark: boolean;
    modelPaths: string[];
    modelMatch: Function;
}

@Global()
@Module({})
export class DatabaseModule {

    static forRoot(options: DatabaseConnectionOptions[]): DynamicModule {
        const result = options.map(option => {
            return {
                provide: option.token,
                useFactory: async () => {
                    const sequelize = new Sequelize(option as any);
                    await sequelize.authenticate();
                    console.log('CONNECTION - ', option.token);
                    return sequelize;
                },
            };
        });
        return {
            module: DatabaseModule,
            providers: result,
            exports: result
        };
    }
}

@Module({})
export class EntityModule {
    private static count = 0;
    private static entites: Array<typeof Model> = [];
    

 static forFeature(entidades: Array<typeof Model>): DynamicModule {
        EntityModule.entites = EntityModule.entites.concat(entidades);
        const result: Provider[] = EntityModule.entites.map(entidad => {
            return {
                provide: entidad,
                useValue: entidad,

            };
           
        });
        return {
            module: EntityModule,
            providers: result,
            exports: result
        };
    }
   /* onModuleInit(): any {
        console.log('ENTRE', EntityModule.count);
    }*/
}