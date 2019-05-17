import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseCreateCurrencyDto, ResponseCurrencyWithValues, ResponseAllCurrencyDto, RequestCreateCurrencyDto, RequestUpdateCurrencyDto, ResponseCreateCurrencyHistoricDto } from '../dto/currency.dto';
import { map } from 'rxjs/operators';
import { ResponseCompetitorDto, RequestCreateCompetitorDto, RequestUpdateCompetitorDto } from '../dto/competitor.dto';
import { ServiceOpts } from './service.service';


@Injectable({
    providedIn: 'root'
})
export class CompetitorService {

    private options = {
        apiUrl: 'jajs'
    };

    constructor(private http: HttpClient) {
    }

    getAllCompetitors() {
        return this.http.get<ResponseFormat<ResponseCompetitorDto[]>>(`${this.options.apiUrl}/competitor`);
    }
    getCompetitorById(id: number) {
        return this.http.get<ResponseFormat<ResponseCompetitorDto>>(`${this.options.apiUrl}/competitor/${id}`);
    }
    postCompetitor(register: RequestCreateCompetitorDto) {
        return this.http.post<ResponseFormat<ResponseCompetitorDto>>(`${this.options.apiUrl}/competitor`, register);
    }

    deleteCompetitor(id: number) {
        return this.http.delete(`${this.options.apiUrl}/competitor/${id}`);
    }

    updateCompetitor(id: number, register: RequestUpdateCompetitorDto) {
        return this.http.put<ResponseFormat<RequestUpdateCompetitorDto>>(`${this.options.apiUrl}/competitor/${id}`, register);
    }

}
