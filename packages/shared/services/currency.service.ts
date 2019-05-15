import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseCreateCurrencyDto, ResponseCurrencyWithValues, ResponseAllCurrencyDto, RequestCreateCurrencyDto, RequestUpdateCurrencyDto, ResponseCreateCurrencyHistoricDto } from '../dto/currency.dto';
import { map } from 'rxjs/operators';
import { CurrencyHistoric } from '../models/currencyHistoric.model';
import { Price } from '../models/price.model';


@Injectable({
    providedIn: 'root'
})
export class CurrencyService {


    constructor(
        private http: HttpClient
    ) { }

    getAllCurrencies() {
        return this.http.get<ResponseFormat<ResponseAllCurrencyDto[]>>(`${environment.apiUrl}/currencies`);
    }

    postCurrency(register: RequestCreateCurrencyDto) {
        return this.http.post<ResponseFormat<ResponseAllCurrencyDto>>(`${environment.apiUrl}/currencies`, register);
    }

    deleteCurrency(id: number) {
        return this.http.delete(`${environment.apiUrl}/currencies/${id}`);
    }

    updateCurrency(id: number, register: RequestUpdateCurrencyDto) {
        return this.http.put<ResponseFormat<RequestUpdateCurrencyDto>>(`${environment.apiUrl}/currencies/${id}`, register);
    }

    getAllHistoricByCurrencyId(currencyId: number) {
        return this.http.get<ResponseFormat<ResponseCurrencyWithValues>>(`${environment.apiUrl}/currencies/${currencyId}/historic`);
    }

    postPrice(id: number, register: Price) {
        return this.http.post<ResponseFormat<ResponseCreateCurrencyHistoricDto>>(`${environment.apiUrl}/currencies/${id}/historic`, register);
    }

    deletePrice(currencyId: number, historicId: number) {
        return this.http.delete<ResponseFormat<ResponseCreateCurrencyHistoricDto>>(`${environment.apiUrl}/currencies/${currencyId}/historic/${historicId}`);
    }
}
