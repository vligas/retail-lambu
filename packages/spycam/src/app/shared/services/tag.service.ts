import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@frontend/environments/environment';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { Tag } from '../models/tag.model';
// import dummy from '@frontend/app/views/params/tag/dummy';
import { ResponseTagDto } from '../dto/tag.dto';
import { Omit, Utils } from '../utils';
import { SimpleProductDto } from '../models/products.models';
import { ResponseSimpleProductDto } from '../dto/product.dto';

@Injectable({
    providedIn: 'root'
})
export class TagService {

    constructor(
        private http: HttpClient
    ) { }

    getAllTags() {

        const str = `${environment.apiUrl}/tag`;
        return this.http.get<ResponseFormat<ResponseTagDto[]>>(str);
    }

    updateTag(tag: Tag) {
        return this.http.put<ResponseFormat<ResponseTagDto[]>>(`${environment.apiUrl}/tag/${tag.id}`, tag);
    }

    createTag(tag: Omit<Tag, 'id'>) {
        return this.http.post<ResponseFormat<ResponseTagDto>>(`${environment.apiUrl}/tag`, tag);
    }

    deleteTag(id: number) {
        return this.http.delete(`${environment.apiUrl}/tag/${id}`);
    }

    ///for TagProduct (nxm)
    getProductsForTag(id: number) {
        return this.http.get<ResponseFormat<SimpleProductDto[]>>(`${environment.apiUrl}/tag/${id}/products`);
    }

    createTagWithProduct(tag: Omit<Tag, 'id'>, codeProd: string) {
        return this.http.post<ResponseFormat<ResponseTagDto>>(`${environment.apiUrl}/tag/relation-product/${codeProd}`, tag);
    }

    deleteTagProduct(tagId: number, productId: number) {
        return this.http.delete(`${environment.apiUrl}/tag/${tagId}/product/${productId}`);
    }

    filterTags(params: any) {
        const sParams = {};
        Object.keys(params).map((key) => {
            sParams[`filter.where.${key}.like`] = `${params[key]}%`;
        });
        const query = Utils.httpQueryBuilder(`${environment.apiUrl}/tag`, sParams);
        return this.http.get<ResponseFormat<ResponseTagDto[]>>(query);
    }
}
