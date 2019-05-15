import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseGapDto } from '../dto/gap.dto';
import { ResponseSaleDto } from '../dto/sale.dto';
import { ResponsePriceVariationDto } from '../dto/priceVariation.dto';

import { Utils } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  constructor(
    private http: HttpClient
  ) { }

  getProductsForGap(differenceField1: string, differenceField2: string, options: { where?: any; pageSize: number; page: number }) {
    let url = `${environment.apiUrl}/gap`;
    const params = { differenceField1, differenceField2 };

    if (options.where) {

      if (options.where.productCode) {
        params['filter.where.c_Codigo.like'] = options.where.productCode;
      }

      if (options.where.gap) {
        params['filter.where.gap.lt'] = options.where.gap;
      }
    }


    params['filter.pageSize'] = options.pageSize;
    params['filter.page'] = options.page;

    url = Utils.httpQueryBuilder(url, params);
    console.log(url);

    return this.http.get<ResponseFormat<ResponseGapDto>>(url);
  }

  getTest() {
    const str = `${environment.apiUrl}/gap/`;
    return this.http.get<ResponseFormat<ResponseGapDto[]>>(str);
  }

  getProductsForPriceVariation(params: any) {
    const sParams = {};
    Object.keys(params).map((key) => {
      sParams[`filter.where.${key}.eq`] = `${params[key]}`;
    });
    const query = Utils.httpQueryBuilder(`${environment.apiUrl}/price-variation`, sParams);
    return this.http.get<ResponseFormat<ResponsePriceVariationDto[]>>(query);
  }

  getProductsForSale(options: { where?: any; pageSize: number; page: number; }) {

    let url = `${environment.apiUrl}/sale`;
    const params = Utils.formatFilterObject(options);
    url = Utils.httpQueryBuilder(url, params);
    return this.http.get<ResponseFormat<ResponseSaleDto>>(url);
  }
}
