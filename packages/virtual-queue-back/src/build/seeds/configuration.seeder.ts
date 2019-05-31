import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Configuration } from '../../database/models/Configuration/configuration.entity';
export default class ConfigurationSeeder implements SeedInterface {

    constructor(@Inject(Configuration) private configRepository: typeof Configuration) { }
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
