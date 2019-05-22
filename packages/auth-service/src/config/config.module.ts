import { Module, Provider } from '@nestjs/common';
import { ConfigService } from './config.service';

const configProvider: Provider = {
    provide: ConfigService,
    useValue: new ConfigService(`./src/config/enviroments/${process.env.NODE_ENV || 'development'}.env`)
};

@Module({
    providers: [configProvider],
    exports: [configProvider]
})
export class ConfigModule {

}