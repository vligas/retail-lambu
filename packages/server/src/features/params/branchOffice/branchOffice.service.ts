import { Injectable, Inject } from '@nestjs/common';
import { MaSucursales } from 'src/database/models/VAD10/stellar/maSucursales/maSucursales.entity';
import { ServiceOptions } from 'src/common/interfaces/serviceOptions.interface';


@Injectable()
export class BranchOfficeService {


    constructor(
        @Inject(MaSucursales) private readonly branchOfficeRepository: typeof MaSucursales,
    ) { }

    async all() {
        return await this.branchOfficeRepository.findAll({
            limit: 50
        });
    }

}