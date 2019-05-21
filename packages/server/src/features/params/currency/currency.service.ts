import { Injectable, Inject } from '@nestjs/common';
import { Currency } from 'src/database/models/VAD10/currency/currency.entity';
import { RequestCreateCurrencyDto, RequestUpdateCurrencyDto, RequestAllCurrencyDto } from './currency.dto';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';
import { CurrencyHistory } from 'src/database/models/VAD10/currencyHistory/currencyHistory.entity';
import { HttpCommunicationService } from '@retail/common';
import { AUTH_SERVICE_NAME } from '@retail/common/src/utils/constants';

@Injectable()
export class CurrencyService {


    constructor(
        @Inject(Currency) private readonly currencyRepository: typeof Currency,
        @Inject(CurrencyHistory) private readonly currencyHistoryRepository: typeof CurrencyHistory,
        private http: HttpCommunicationService
    ) { }

    async createHistoric(object: Partial<CurrencyHistory>): Promise<CurrencyHistory> {
        await this.currencyHistoryRepository.create(object);
        return object as CurrencyHistory;
    }

    async all(qs: RequestAllCurrencyDto, options: ServiceOptions) {

        const res = await this.http.call(AUTH_SERVICE_NAME, {
            method: 'POST',
            endpoint: 'login',
            body: {
                username: 'lgonzalez',
                password: '123'
            },
        });

        const result = await this.currencyRepository.findAll({
            limit: options.pageSize,
            include: [{
                model: this.currencyHistoryRepository,
                as: 'values',
                separate: true,
                order: [['date', 'DESC']],
                limit: 1,
                where: {
                    date: {
                        $lte: new Date()
                    }
                }
            }],
        } as any) as any;

        return result.map(currency => {
            const result = currency.toJSON();
            result.lastPrice = result.values[0];
            delete result.values;
            return result;
        });
    }

    async one(id: number) {
        const result: any = await this.currencyRepository.findOne({
            where: {
                id
            }
        });
        result.dataValues.lastPrice = await this.getLastPrice(result.id);
        return result;
    }

    async getHistorical(id: number, options: ServiceOptions) {
        const result: any = await this.currencyRepository.findOne({
            where: {
                id
            },
            include: [{
                model: this.currencyHistoryRepository,
                as: 'values',
                separate: true,
                limit: options.pageSize,
                order: [['date', 'DESC']],
            }],
        } as any);

        result.dataValues.lastPrice = await this.getLastPrice(result.id);
        return result;
    }

    async getLastPrice(id: number) {
        return await this.currencyHistoryRepository.findOne({
            where: {
                currencyId: id,
                date: {
                    $lte: new Date()
                }
            },
            order: [['date', 'DESC']],
            limit: 1
        } as any);
    }


    async create(register: RequestCreateCurrencyDto) {
        return await this.currencyRepository.create(register);
    }

    async delete(id: number) {
        const dollarPrice = await this.one(id);
        await dollarPrice.destroy();
    }

    async update(id: number, currency: RequestUpdateCurrencyDto) {
        const updatecurrency = await this.one(id);
        return await updatecurrency.update(currency);
    }

    async deleteHistoric(historicId: number) {
        const historic = await this.currencyHistoryRepository.findOne({
            where: {
                id: historicId
            }
        });
        await historic.destroy();
    }



}