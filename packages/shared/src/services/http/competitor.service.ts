import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    ResponseFormat,
    ResponseCompetitorDto,
    RequestCreateCompetitorDto,
    RequestUpdateCompetitorDto
} from '../../dto';
import { ServiceOpts } from './service.module';


@Injectable({
    providedIn: 'root'
})
export class CompetitorService {

    constructor(private http: HttpClient, private options: ServiceOpts) {
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
