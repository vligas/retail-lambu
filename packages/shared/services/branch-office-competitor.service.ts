import { Injectable } from '@angular/core';
import { environment } from '@frontend/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseBranchOfficeDto, RequestCreateBranchOfficeDto, RequestUpdateBranchOfficeDto } from '@frontend/app/shared/dto/branchOffice.dto';
import { ResponseFormat } from '@frontend/app/shared/dto/responseFormat.interface';

@Injectable({
    providedIn: 'root'
})
export class BranchOfficeCompetitorService {


    constructor(
        private http: HttpClient
    ) { }

    getAllBranchOffice() {
        return this.http.get<ResponseFormat<ResponseBranchOfficeDto[]>>(`${environment.apiUrl}/branch-office`);
    }
    postBranchOffice(register: RequestCreateBranchOfficeDto) {
        return this.http.post<ResponseFormat<ResponseBranchOfficeDto>>(`${environment.apiUrl}/branch-office`, register);
    }

    deleteBranchOffice(id: number) {
        return this.http.delete(`${environment.apiUrl}/branch-office/${id}`);
    }

    updateBranchOffice(id: number, register: RequestUpdateBranchOfficeDto) {
        return this.http.put<ResponseFormat<RequestUpdateBranchOfficeDto>>(`${environment.apiUrl}/branch-office/${id}`, register);
    }

}
