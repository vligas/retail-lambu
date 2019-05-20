import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ResponseFormat,
  ResponseProductDto,
  ResponseProvidersByProductDto,
  ResponseSimpleProductDto
} from '../src/dto';
import { Tag } from '../models/tag.model';
import { Utils } from '../utils';
import { ServiceOpts } from './service.module';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient, private options: ServiceOpts) {
    this.options = options;
    console.group("ProductService Constructor");
    console.log("Injected options");
    console.log(this.options);
    console.groupEnd();
  }

  getProducts(options: {
    where?: any;
    pageSize: number;
    page: number;
  }) {
    let url = `${this.options.apiUrl}/product/simple`;

    const params = Utils.formatFilterObject(options);
    url = Utils.httpQueryBuilder(url, params);

    return this.http.get<ResponseFormat<ResponseSimpleProductDto>>(url);
  }

  getProductByCod(code: string) {
    return this.http.get<ResponseFormat<ResponseProductDto>>(`${this.options.apiUrl}/product/${code}`);
  }

  getProvidersByProducts(code: string) {
    return this.http.get<ResponseFormat<ResponseProvidersByProductDto[]>>(`${this.options.apiUrl}/product/${code}/providers`);
  }

  getTagsByProductCod(code: string) {
    return this.http.get<ResponseFormat<Tag[]>>(`${this.options.apiUrl}/product/${code}/tags`);
  }

  getProductsByDepartament(code: string) {
    return this.http.get<ResponseFormat<ResponseSimpleProductDto[]>>(`${this.options.apiUrl}/product/${code}/group-by/departament`);
  }

  getProductsByGroup(code: string) {
    return this.http.get<ResponseFormat<ResponseSimpleProductDto[]>>(`${this.options.apiUrl}/product/${code}/group-by/departament/group`);
  }

  getProductsBySubGroup(code: string) {
    return this.http.get<ResponseFormat<ResponseSimpleProductDto[]>>(`${this.options.apiUrl}/product/${code}/group-by/departament/group/sub-group`);
  }

}
