import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseAllBranchOfficeDto } from '../dto/branchOffice.dto';
import { ResponseFormat } from '../dto/responseFormat.interface';

@Injectable({
    providedIn: 'root'
})
export class BranchOfficeService {

    private options = {
        apiUrl: 'jajs'
    };

    constructor(private http: HttpClient) {
    }
    getAllBranchOffices() {
        return this.http.get<ResponseFormat<ResponseAllBranchOfficeDto[]>>(`${this.options.apiUrl}/branch-offices`);
    }

}
