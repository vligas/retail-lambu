import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ResponseGapDto,
  RequestGapersDto,
  ResponseFormat,
  ResponseSaleDto,
  ResponsePriceVariationDto
} from '../dto';
import { Utils } from '../utils';
import { ServiceOptions } from '../models';
import { ServiceOpts } from './service.module';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {



  constructor(private http: HttpClient, private options: ServiceOpts) {
  }

  getProductsForGap(gapers: RequestGapersDto[], options: ServiceOptions, ) {
    let url = `${this.options.apiUrl}/gap/best`;
    const params = { gapers };

    if (options.query) {

      if (options.query.productCode) {
        params['filter.where.c_Codigo.like'] = options.query.productCode;
      }

      if (options.query.gap) {
        params['filter.where.gap.lt'] = options.query.gap;
      }
    }

    params['filter.pageSize'] = options.pageSize;
    params['filter.page'] = options.page;

    url = Utils.httpQueryBuilder(url, params);
    console.log(url);

    return this.http.get<ResponseFormat<ResponseGapDto>>(url);
  }


  getProductsForPriceVariation(params: any) {
    const sParams = {};
    Object.keys(params).map((key) => {
      sParams[`filter.where.${key}.eq`] = `${params[key]}`;
    });
    const query = Utils.httpQueryBuilder(`${this.options.apiUrl}/price-variation`, sParams);
    return this.http.get<ResponseFormat<ResponsePriceVariationDto[]>>(query);
  }

  getProductsForSale(options: { where?: any; pageSize: number; page: number; }) {

    let url = `${this.options.apiUrl}/sale`;
    const params = Utils.formatFilterObject(options);
    url = Utils.httpQueryBuilder(url, params);
    return this.http.get<ResponseFormat<ResponseSaleDto>>(url);
  }
}
