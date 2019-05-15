import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { RequestCreateCompetitorPriceDto } from '../dto/competitorPrice.dto';


@Injectable({
    providedIn: 'root'
})
export class CompetitorPriceService {


    constructor(
        private http: HttpClient
    ) { }

    postCompetitorPrice(register: any) {
        return this.http.post<ResponseFormat<RequestCreateCompetitorPriceDto>>(`${environment.apiUrl}/competitor-price`, register);
    }

}
