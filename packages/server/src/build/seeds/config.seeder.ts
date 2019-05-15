import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Config } from 'src/database/models/VAD10/config/config.entity';

export default class ConfigSeeder implements SeedInterface {
    constructor(@Inject(Config) private configRepository: typeof Config) { }

    async run() {
        const config = await this.configRepository.create({
            name: 'default-fields-gap',
            json: {
                value: {
                    defaultPrices: [{
                        gapper1: 'ActualPrice',
                        gapper2: 'SalePrice'
                    }],
                }
            }
        });
    }
}