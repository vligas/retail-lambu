import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseCreateDollarPriceDto, RequestCreateDollarPriceDto } from '../dto/dollarPrice.dto';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DollarPriceService {

    private options = {
        apiUrl: 'jajs'
    };

    constructor(private http: HttpClient) {
    }

    getAllDollarPrices() {
        return this.http.get<ResponseFormat<ResponseCreateDollarPriceDto[]>>(`${this.options.apiUrl}/dollar-prices`);
    }

    getLatestDollarPrice() {
        return this.http.get<ResponseFormat<ResponseCreateDollarPriceDto>>(`${this.options.apiUrl}/dollar-prices/latest`);
    }

    postDollarPrice(register: RequestCreateDollarPriceDto) {
        return this.http.post<ResponseFormat<ResponseCreateDollarPriceDto>>(`${this.options.apiUrl}/dollar-prices`, register);
    }

    deleteDollarPrice(id: number) {
        return this.http.delete(`${this.options.apiUrl}/dollar-prices/${id}`);
    }
}