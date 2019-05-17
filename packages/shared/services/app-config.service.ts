import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestUpdateConfigDto } from '../dto/appConfig.dto';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private options = {
    apiUrl: 'jajs'
  };

  constructor(private http: HttpClient) {
  }

  fetch() {
    return this.http.get<any>(`${this.options.apiUrl}/config`);
  }

  update(config: RequestUpdateConfigDto) {
    return this.http.put<any>(`${this.options.apiUrl}/config`, config);
  }
}
