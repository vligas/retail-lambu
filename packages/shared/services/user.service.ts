import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ResponseSimpleUserDto,
  RequestUpdateUserDto,
  ResponseFormat
} from '../src/dto';
import { ServiceOpts } from './service.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private options: ServiceOpts) {
  }

  getAllUsers() {
    return this.http.get<ResponseFormat<ResponseSimpleUserDto[]>>(`${this.options.apiUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get<ResponseFormat<ResponseSimpleUserDto>>(`${this.options.apiUrl}/users/${id}`);
  }

  updateUser(register: RequestUpdateUserDto, id: number) {
    return this.http.put<ResponseFormat<ResponseSimpleUserDto>>(`${this.options.apiUrl}/users/${id}`, register);
  }
}
