import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseFormat } from '@retail/shared/dto/responseFormat.interface';
import { ResponseGapDto, RequestGapersDto } from '@retail/shared/dto/gap.dto';
import { ResponseSaleDto } from '@retail/shared/dto/sale.dto';
import { ResponsePriceVariationDto } from '@retail/shared/dto/priceVariation.dto';

import { Utils } from '@retail/shared/utils';
import { ServiceOptions } from '@retail/shared/models/queryOptions.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  constructor(
    private http: HttpClient
  ) { }

  getProductsForGap(gapers: RequestGapersDto[], options: ServiceOptions) {
    let url = `${environment.apiUrl}/gap/best`;
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
