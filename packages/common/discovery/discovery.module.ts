import { Module, DynamicModule, Global} from '@nestjs/common';
import { DiscoveryOptions } from './options/discovery.options';
import * as consul from 'consul';
import { ConsulService } from './services/consul.service';

@Module({})
@Global()
export class ServiceDiscoveryModule {
    
    static forRoot(options: DiscoveryOptions): DynamicModule {
        const client = consul({
            promisify: true,
            port: options.consul.port.toString(),
            host: options.consul.address,
        });
        
        return {
            module: ServiceDiscoveryModule,
            providers: [{
                provide: DiscoveryOptions,
                useValue: options
            }, {
                provide: 'CONSUL',
                useValue: client
            },
                ConsulService,
            ],
            exports: [
                ConsulService,
            ]
        };
    }
}