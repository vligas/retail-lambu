import { Module, DynamicModule} from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript';

interface DatabaseConnectionOptions {
    token: string
    username: string
    password: string
    dialect: string
    host: string
    logging: boolean
    port: number
    database: string
    benchmark: boolean
    modelPaths: string[]
    modelMatch: Function
}


@Module({})
export class DatabaseModule {
    static forRoot(options: DatabaseConnectionOptions[]): DynamicModule {
        return {
            module: DatabaseModule,
            
            providers: options.map(option => {
                return {
                    provide: option.token,
                    useFactory: async () => {
                        const sequelize = new Sequelize(option as any);
                        await sequelize.authenticate();
                        console.log("CONNECTION - ", option.token)
                        return sequelize;
                    }
                }
            })
        }
    }
}