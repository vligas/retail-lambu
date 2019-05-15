import { Injectable, Inject } from '@nestjs/common';
import { DollarPrice } from 'src/database/models/VAD10/dollarPrice/dollarPrice.entity';
import { RequestCreateDollarPriceDto } from './dollarPrice.dto';

@Injectable()
export class DollarPriceService {

    constructor(
        @Inject(DollarPrice) private readonly dollarPriceRepository: typeof DollarPrice,
    ) { }

    async all() {
        return await this.dollarPriceRepository.findAll({
            limit: 50,
            order: [['date', 'DESC']]
        });
    }

    async latest() {
        return await this.dollarPriceRepository.findOne({
            where: {
                date: {
                    $lte: new Date()
                }
            },
            order: [['date', 'DESC']]
        } as any);
    }

    async one(id: number) {
        const dollarPrice = await this.dollarPriceRepository.findOne({
            where: {
                id
            }
        });
        return dollarPrice;
    }


    async create(register: RequestCreateDollarPriceDto) {
        //register.password = await this.getHash(register.password);
        const newRegister = {
            ...register,
            date: new Date(register.date),
        };
        console.log(newRegister);
        return await this.dollarPriceRepository.create(newRegister);
    }

    async delete(id: number) {
        const dollarPrice = await this.one(id);
        await dollarPrice.destroy();
    }


}