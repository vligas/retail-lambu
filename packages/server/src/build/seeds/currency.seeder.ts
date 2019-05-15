import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Currency } from 'src/database/models/VAD10/currency/currency.entity';

export default class CurrencySeeder implements SeedInterface {
    constructor(@Inject(Currency) private currencyRepository: typeof Currency) { }

    async run() {
        const currencies: Array<Partial<Currency>> = [{
            denomination: '$',
            name: 'Dolar',
        }, {
            denomination: '€',
            name: 'Euro'
        }, {
            denomination: '$N',
            name: 'Dolar Negro'
        }];

        await this.currencyRepository.bulkCreate(currencies);
    }
}