import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseCreateCategoryDto, RequestCreateCategoryDto, RequestUpdateCategoryDto } from '../dto/category.dto';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private options = {
        apiUrl: 'jajs'
    };

    constructor(private http: HttpClient) {
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
