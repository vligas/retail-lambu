import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    ResponseAllBranchOfficeDto,
    ResponseFormat
} from '../../dto';
import { ServiceOpts } from './service.module';

@Injectable({
    providedIn: 'root'
})
export class BranchOfficeService {

    constructor(private http: HttpClient, private options: ServiceOpts) {
    }
    getAllBranchOffices() {
        return this.http.get<ResponseFormat<ResponseAllBranchOfficeDto[]>>(`${this.options.apiUrl}/branch-offices`);
    }

}
