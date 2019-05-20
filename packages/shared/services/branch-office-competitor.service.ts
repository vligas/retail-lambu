import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseBranchOfficeDto, RequestCreateBranchOfficeDto, RequestUpdateBranchOfficeDto } from '../dto/branchOffice.dto';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ServiceOpts } from './service.module';

@Injectable({
    providedIn: 'root'
})
export class BranchOfficeCompetitorService {

    constructor(private http: HttpClient, private options: ServiceOpts) {
    }

    getAllBranchOffice() {
        return this.http.get<ResponseFormat<ResponseBranchOfficeDto[]>>(`${this.options.apiUrl}/branch-office`);
    }
    postBranchOffice(register: RequestCreateBranchOfficeDto) {
        return this.http.post<ResponseFormat<ResponseBranchOfficeDto>>(`${this.options.apiUrl}/branch-office`, register);
    }

    deleteBranchOffice(id: number) {
        return this.http.delete(`${this.options.apiUrl}/branch-office/${id}`);
    }

    updateBranchOffice(id: number, register: RequestUpdateBranchOfficeDto) {
        return this.http.put<ResponseFormat<RequestUpdateBranchOfficeDto>>(`${this.options.apiUrl}/branch-office/${id}`, register);
    }

}
