import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    RequestCreateCompetitorPriceDto,
    ResponseFormat
} from '../../dto';
import { ServiceOpts } from './service.module';


@Injectable({
    providedIn: 'root'
})
export class CompetitorPriceService {


    constructor(
        private http: HttpClient,
        private options: ServiceOpts
    ) { }

    postCompetitorPrice(register: any) {
        return this.http.post<ResponseFormat<RequestCreateCompetitorPriceDto>>(`${this.options.apiUrl}/competitor-price`, register);
    }

}
