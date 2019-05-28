import { Module, Provider, DynamicModule, Global } from '@nestjs/common';
import { ConfigService, EnvConfig } from './config.service';

/*const configProvider: Provider = {
    provide: ConfigService,
    useValue: new ConfigService(`./src/config/enviroments/${process.env.NODE_ENV || 'development'}.env`)
};**/

@Global()
@Module({})

export class ConfigModule {
  
    static forRoot(cadena: string): DynamicModule {
        return {
            module: ConfigModule,
            providers: [{
                provide: ConfigService,
                useValue: 
                    new ConfigService(cadena)
            }],
            exports: [ConfigService]
        };
    }
}