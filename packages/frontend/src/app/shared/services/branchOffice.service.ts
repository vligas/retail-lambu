import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseAllBranchOfficeDto } from '@retail/shared/dto/branchOffice.dto';
import { ResponseFormat } from '@retail/shared/dto/responseFormat.interface';

@Injectable({
    providedIn: 'root'
})
export class BranchOfficeService {


    constructor(
        private http: HttpClient
    ) { }

    getAllBranchOffices() {
        return this.http.get<ResponseFormat<ResponseAllBranchOfficeDto[]>>(`${environment.apiUrl}/branch-offices`);
    }

}
