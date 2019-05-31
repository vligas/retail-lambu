import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Config } from 'src/database/models/configuration/config.entity';
export default class ConfigurationSeeder implements SeedInterface {

    constructor(@Inject(Config) private configRepository: typeof Config) { }
    async run() {
        const config = await this.configRepository.create({
            name: 'Configuration-1',
            json: {
                value: {
                    default: [{
                        path: 'images/carne.jpg',
                    }],
                },
            },
        });
    }
}
