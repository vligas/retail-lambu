import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseCreateCurrencyDto, ResponseCurrencyWithValues, ResponseAllCurrencyDto, RequestCreateCurrencyDto, RequestUpdateCurrencyDto, ResponseCreateCurrencyHistoricDto } from '../dto/currency.dto';
import { map } from 'rxjs/operators';
import { Price } from '../models/price.model';
import { ServiceOpts } from './service.module';


@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    constructor(private http: HttpClient, private options: ServiceOpts) {
    }

    getAllCurrencies() {
        return this.http.get<ResponseFormat<ResponseAllCurrencyDto[]>>(`${this.options.apiUrl}/currencies`);
    }

    postCurrency(register: RequestCreateCurrencyDto) {
        return this.http.post<ResponseFormat<ResponseAllCurrencyDto>>(`${this.options.apiUrl}/currencies`, register);
    }

    deleteCurrency(id: number) {
        return this.http.delete(`${this.options.apiUrl}/currencies/${id}`);
    }

    updateCurrency(id: number, register: RequestUpdateCurrencyDto) {
        return this.http.put<ResponseFormat<RequestUpdateCurrencyDto>>(`${this.options.apiUrl}/currencies/${id}`, register);
    }

    getAllHistoricByCurrencyId(currencyId: number) {
        return this.http.get<ResponseFormat<ResponseCurrencyWithValues>>(`${this.options.apiUrl}/currencies/${currencyId}/historic`);
    }

    postPrice(id: number, register: Price) {
        return this.http.post<ResponseFormat<ResponseCreateCurrencyHistoricDto>>(`${this.options.apiUrl}/currencies/${id}/historic`, register);
    }

    deletePrice(currencyId: number, historicId: number) {
        return this.http.delete<ResponseFormat<ResponseCreateCurrencyHistoricDto>>(`${this.options.apiUrl}/currencies/${currencyId}/historic/${historicId}`);
    }
}
