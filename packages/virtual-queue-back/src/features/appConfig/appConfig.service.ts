import { Injectable, Inject } from '@nestjs/common';
import { Configuration } from 'src/database/models/configuration/configuration.entity';
import { RequestUpdateConfigDto } from './appConfig.dto';

@Injectable()
export class AppConfigService {

    constructor(
        @Inject(Configuration) private readonly configRepository: typeof Configuration,
    ) { }

    async all() {
        return await this.configRepository.findAll();
    }

    async get(name: string) {
        return await this.configRepository.findOne({
            where: {
                name,
            },
        });
    }

    async update(config: RequestUpdateConfigDto) {
        const Config = config['Configuration-1'];
        await this.configRepository.update({ json: Config }, {
            where: {
                name: 'Configuration-1',
            },
        });
    }
}