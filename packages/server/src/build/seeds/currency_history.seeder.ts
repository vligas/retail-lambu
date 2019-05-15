import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Currency } from 'src/database/models/VAD10/currency/currency.entity';
import { CurrencyHistory } from 'src/database/models/VAD10/currencyHistory/currencyHistory.entity';
import { addDays } from 'src/common/utils';

export default class CurrencyHistorySeeder implements SeedInterface {
    constructor(
        @Inject(Currency) private currencyRepository: typeof Currency,
        @Inject(CurrencyHistory) private currencyHistoryRepository: typeof CurrencyHistory,
    ) { }

    async run() {
        const currencies = await this.currencyRepository.findAll();
        const registers = [];
        let date = new Date('01/01/2017');
        for (let day = 1; day < 1500; day++) {
            for (const currency of currencies) {
                registers.push({
                    date,
                    price: (Math.random() * 10000).toFixed(0),
                    currencyId: currency.id
                });
            }
            date = addDays(date, 1);
        }

        await this.currencyHistoryRepository.bulkCreate(registers);

    }
}