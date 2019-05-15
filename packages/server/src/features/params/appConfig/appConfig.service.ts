import { Injectable, Inject } from '@nestjs/common';
import { Category } from 'src/database/models/VAD10/category/category.entity';
import { Config } from 'src/database/models/VAD10/config/config.entity';
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
                name
            }
        });
    }

    async update(config: RequestUpdateConfigDto) {
        const gapConfig = config['default-fields-gap'];
        await this.configRepository.update({ json: gapConfig }, {
            where: {
                name: 'default-fields-gap'
            }
        });
    }
}