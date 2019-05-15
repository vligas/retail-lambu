import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseCreateCategoryDto, RequestCreateCategoryDto, RequestUpdateCategoryDto } from '../dto/category.dto';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http: HttpClient
    ) { }

    getAllCategories() {
        return this.http.get<ResponseFormat<ResponseCreateCategoryDto[]>>(`${environment.apiUrl}/categories`);
    }

    postCategory(register: RequestCreateCategoryDto) {
        return this.http.post<ResponseFormat<ResponseCreateCategoryDto>>(`${environment.apiUrl}/categories`, register);
    }

    deleteCategory(id: number) {
        return this.http.delete(`${environment.apiUrl}/categories/${id}`);
    }

    updateCategory(id: number, register: RequestUpdateCategoryDto) {
        return this.http.put<ResponseFormat<RequestUpdateCategoryDto>>(`${environment.apiUrl}/categories/${id}`, register);
    }
}
