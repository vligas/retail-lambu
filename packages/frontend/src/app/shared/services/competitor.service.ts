import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '@retail/shared/dto/responseFormat.interface';
import { ResponseCreateCurrencyDto, ResponseCurrencyWithValues, ResponseAllCurrencyDto, RequestCreateCurrencyDto, RequestUpdateCurrencyDto, ResponseCreateCurrencyHistoricDto } from '@retail/shared/dto/currency.dto';
import { map } from 'rxjs/operators';
import { ResponseCompetitorDto, RequestCreateCompetitorDto, RequestUpdateCompetitorDto } from '@retail/shared/dto/competitor.dto';


@Injectable({
    providedIn: 'root'
})
export class CompetitorService {


    constructor(
        private http: HttpClient
    ) { }

    getAllCompetitors() {
        return this.http.get<ResponseFormat<ResponseCompetitorDto[]>>(`${environment.apiUrl}/competitor`);
    }
    getCompetitorById(id: number) {
        return this.http.get<ResponseFormat<ResponseCompetitorDto>>(`${environment.apiUrl}/competitor/${id}`);
    }
    postCompetitor(register: RequestCreateCompetitorDto) {
        return this.http.post<ResponseFormat<ResponseCompetitorDto>>(`${environment.apiUrl}/competitor`, register);
    }

    deleteCompetitor(id: number) {
        return this.http.delete(`${environment.apiUrl}/competitor/${id}`);
    }

    updateCompetitor(id: number, register: RequestUpdateCompetitorDto) {
        return this.http.put<ResponseFormat<RequestUpdateCompetitorDto>>(`${environment.apiUrl}/competitor/${id}`, register);
    }

}
