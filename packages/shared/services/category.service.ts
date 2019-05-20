import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    ResponseFormat,
    ResponseCreateCategoryDto,
    RequestCreateCategoryDto,
    RequestUpdateCategoryDto
} from '../src/dto';
import { map } from 'rxjs/operators';
import { ServiceOpts } from './service.module';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient, private options: ServiceOpts) {
    }

    getAllCategories() {
        return this.http.get<ResponseFormat<ResponseCreateCategoryDto[]>>(`${this.options.apiUrl}/categories`);
    }

    postCategory(register: RequestCreateCategoryDto) {
        return this.http.post<ResponseFormat<ResponseCreateCategoryDto>>(`${this.options.apiUrl}/categories`, register);
    }

    deleteCategory(id: number) {
        return this.http.delete(`${this.options.apiUrl}/categories/${id}`);
    }

    updateCategory(id: number, register: RequestUpdateCategoryDto) {
        return this.http.put<ResponseFormat<RequestUpdateCategoryDto>>(`${this.options.apiUrl}/categories/${id}`, register);
    }
}
