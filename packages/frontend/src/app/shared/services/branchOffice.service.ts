import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseAllBranchOfficeDto } from '../dto/branchOffice.dto';
import { ResponseFormat } from '../dto/responseFormat.interface';

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
