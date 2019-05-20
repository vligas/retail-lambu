import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    ResponseFormat,
    ResponseTagDto
} from '../src/dto';
import { Tag } from '../models/tag.model';
// import dummy from '@frontend/app/views/params/tag/dummy';
import { Omit, Utils } from '../utils';
import { SimpleProductDto } from '../models/products.models';
import { ServiceOpts } from './service.module';

@Injectable({
    providedIn: 'root'
})
export class TagService {

    constructor(private http: HttpClient, private options: ServiceOpts) {
    }

    getAllTags() {

        const str = `${this.options.apiUrl}/tag`;
        return this.http.get<ResponseFormat<ResponseTagDto[]>>(str);
    }

    updateTag(tag: Tag) {
        return this.http.put<ResponseFormat<ResponseTagDto[]>>(`${this.options.apiUrl}/tag/${tag.id}`, tag);
    }

    createTag(tag: Omit<Tag, 'id'>) {
        return this.http.post<ResponseFormat<ResponseTagDto>>(`${this.options.apiUrl}/tag`, tag);
    }

    deleteTag(id: number) {
        return this.http.delete(`${this.options.apiUrl}/tag/${id}`);
    }

    ///for TagProduct (nxm)
    getProductsForTag(id: number) {
        return this.http.get<ResponseFormat<SimpleProductDto[]>>(`${this.options.apiUrl}/tag/${id}/products`);
    }

    createTagWithProduct(tag: Omit<Tag, 'id'>, codeProd: string) {
        return this.http.post<ResponseFormat<ResponseTagDto>>(`${this.options.apiUrl}/tag/relation-product/${codeProd}`, tag);
    }

    deleteTagProduct(tagId: number, productId: number) {
        return this.http.delete(`${this.options.apiUrl}/tag/${tagId}/product/${productId}`);
    }

    filterTags(params: any) {
        const sParams = {};
        Object.keys(params).map((key) => {
            sParams[`filter.where.${key}.like`] = `${params[key]}%`;
        });
        const query = Utils.httpQueryBuilder(`${this.options.apiUrl}/tag`, sParams);
        return this.http.get<ResponseFormat<ResponseTagDto[]>>(query);
    }
}
