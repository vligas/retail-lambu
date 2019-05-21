import { Injectable, Inject } from '@nestjs/common';
import { Consul } from 'consul';
import { DiscoveryOptions } from '../options/discovery.options';

@Injectable()
export class ConsulService {
    id: string;
    ttl = '10s';
    deregisterTime: '1m';

    constructor(
        @Inject('CONSUL') private consul: Consul,
        private options: DiscoveryOptions
    ) {
        this.id = '123123';
    }

    async register() {
        try {
            await this.consul.agent.service.register({
                ...this.options.app,
                id: this.id,
                check: {
                    ttl: this.ttl,
                    deregister_critical_service_after: this.deregisterTime
                }
            } as any);
            setInterval(this.sendLiveSignal.bind(this), 5 * 1000);
            
            process.on('SIGINT', this.deregister.bind(this));
        }
        catch (e) {
            console.error(`can't connect with consul.`);
            throw e;
        }
    }

    async sendLiveSignal() {
        await this.consul.agent.check.pass({ id: `service:${this.id}` });
    }

    async deregister() {
        await this.consul.agent.service.deregister({ id: this.id });
    }
}