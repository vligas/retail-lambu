import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUpdateConfigDto } from '../../dto';
import { ServiceOpts } from './service.module';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {


  constructor(private http: HttpClient, private options: ServiceOpts) {
  }

  fetch() {
    return this.http.get<any>(`${this.options.apiUrl}/config`);
  }

  update(config: RequestUpdateConfigDto) {
    return this.http.put<any>(`${this.options.apiUrl}/config`, config);
  }
}
