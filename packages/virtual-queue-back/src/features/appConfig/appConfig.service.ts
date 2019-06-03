import { Injectable, Inject } from '@nestjs/common';
import { Config } from 'src/database/models/configuration/config.entity';
import { RequestUpdateConfigDto } from './appConfig.dto';

@Injectable()
export class AppConfigService {

    constructor(
        @Inject(Config) private readonly configRepository: typeof Config,
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