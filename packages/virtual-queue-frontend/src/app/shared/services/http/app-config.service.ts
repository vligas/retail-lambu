import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceOpts, RequestUpdateMediaConfigDto } from '@retail/shared';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {


  constructor(private http: HttpClient, private options: ServiceOpts) {
  }

  fetch() {
    // tslint:disable-next-line:no-any
    return this.http.get<any>(`${this.options.apiUrl}/config`);
  }

  update(config: RequestUpdateMediaConfigDto) {
    // tslint:disable-next-line:no-any
    return this.http.put<any>(`${this.options.apiUrl}/config`, config);
  }
}
