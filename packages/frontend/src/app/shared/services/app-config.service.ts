import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@frontend/environments/environment';
import { RequestUpdateConfigDto } from '../dto/appConfig.dto';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<any>(`${environment.apiUrl}/config`);
  }

  update(config: RequestUpdateConfigDto) {
    return this.http.put<any>(`${environment.apiUrl}/config`, config);
  }
}
