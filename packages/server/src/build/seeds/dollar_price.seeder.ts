import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { DollarPrice } from 'src/database/models/VAD10/dollarPrice/dollarPrice.entity';
import { addDays } from 'src/common/utils';

export default class DollarPriceSeeder implements SeedInterface {
    constructor(@Inject(DollarPrice) private dollarRepository: typeof DollarPrice) { }

    async run() {
        const registers = [];
        let date = new Date('01/01/2017');
        for (let day = 1; day < 1500; day++) {
            registers.push({
                date,
                price: (Math.random() * 10000).toFixed(0),
            });
            date = addDays(date, 1);
        }

        await this.dollarRepository.bulkCreate(registers);

    }
}