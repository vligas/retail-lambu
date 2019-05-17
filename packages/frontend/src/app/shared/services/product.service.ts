import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseFormat } from '@retail/shared/dto/responseFormat.interface';
import { ResponseProductDto, ResponseProvidersByProductDto, ResponseSimpleProductDto } from '@retail/shared/dto/product.dto';
import { Tag } from '@retail/shared/models/tag.model';
import { Utils } from '@retail/shared/utils';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(options: {
    where?: any;
    pageSize: number;
    page: number;
  }) {
    let url = `${environment.apiUrl}/product/simple`;

    const params = Utils.formatFilterObject(options);
    url = Utils.httpQueryBuilder(url, params);

    return this.http.get<ResponseFormat<ResponseSimpleProductDto>>(url);
  }

  getProductByCod(code: string) {
    return this.http.get<ResponseFormat<ResponseProductDto>>(`${environment.apiUrl}/product/${code}`);
  }

  getProvidersByProducts(code: string) {
    return this.http.get<ResponseFormat<ResponseProvidersByProductDto[]>>(`${environment.apiUrl}/product/${code}/providers`);
  }

  getTagsByProductCod(code: string) {
    return this.http.get<ResponseFormat<Tag[]>>(`${environment.apiUrl}/product/${code}/tags`);
  }

  getProductsByDepartament(code: string) {
    return this.http.get<ResponseFormat<ResponseSimpleProductDto[]>>(`${environment.apiUrl}/product/${code}/group-by/departament`);
  }

  getProductsByGroup(code: string) {
    return this.http.get<ResponseFormat<ResponseSimpleProductDto[]>>(`${environment.apiUrl}/product/${code}/group-by/departament/group`);
  }

  getProductsBySubGroup(code: string) {
    return this.http.get<ResponseFormat<ResponseSimpleProductDto[]>>(`${environment.apiUrl}/product/${code}/group-by/departament/group/sub-group`);
  }

}
