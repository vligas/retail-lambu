import { Injectable, HttpService } from '@nestjs/common';
import { ConsulService } from '../../discovery/services/consul.service';
import { HttpOptions } from '../interfaces/http-options.interface';
import { logger } from '../../utils';

@Injectable()
export class HttpCommunicationService {
    constructor(private consul: ConsulService, private http: HttpService) {}


    async call(service: string, options: HttpOptions) {
        try {
            const url = this.consul.getServiceUrl(service)[0];
            logger.info(`Request to: ${url}/${options.endpoint}`);
            return await this.http.request({
                method: options.method,
                data: options.body,
                headers: options.headers,
                baseURL: url,
                url: options.endpoint
            });
        }
        catch (e) {
            logger.error(e.message);
        }
    }
}