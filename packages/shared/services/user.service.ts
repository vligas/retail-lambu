import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseSimpleUserDto, RequestUpdateUserDto } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private options = {
    apiUrl: 'jajs'
  };

  constructor(private http: HttpClient) {
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
