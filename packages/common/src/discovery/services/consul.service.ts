import { Injectable, Inject } from '@nestjs/common';
import { Consul } from 'consul';
import { DiscoveryOptions } from '../options/discovery.options';
import { logger } from '../../utils';
import * as uuid from 'uuid';

@Injectable()
export class ConsulService {
    id: string;
    ttl = '10s';
    deregisterTime: '1m';

    watch: {
        [key: string]: string[]
    };

    constructor(
        @Inject('CONSUL') private consul: Consul,
        private options: DiscoveryOptions
    ) {
        this.watch = {};
        options.discover.forEach(micro => {
            this.watch[micro] = [];
        });
        this.id = uuid.v4();
    }

    getServiceUrl(name: string) {
        const url = this.watch[name];
        if (url) {
            return url;
        }
        throw new Error(`There aren't any active node for the service '${name}'`);
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
            logger.info('connected to consul!');

            // tslint:disable-next-line:forin
            for (const microservice in this.watch) {
                const watcher = this.consul.watch({
                    method: this.consul.health.service,
                    options: {
                        service: microservice,
                        passing: true
                    }
                } as any);
                watcher.on('change', (data) => {
                    this.watch[microservice] = data.map(d => `http://${d.Service.Address}:${d.Service.Port}/`);
                });
            }
        }
        catch (e) {
            logger.error(`can't connect with consul.`);
        }
    }

    async sendLiveSignal() {
        await this.consul.agent.check.pass({ id: `service:${this.id}` });
    }

    async deregister() {
        await this.consul.agent.service.deregister({ id: this.id });
    }
}