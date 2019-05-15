import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { environment } from '@frontend/environments/environment';
import { ResponseSimpleUserDto, RequestUpdateUserDto } from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    return this.http.get<ResponseFormat<ResponseSimpleUserDto[]>>(`${environment.apiUrl}/users`);
  }

  getUserById(id: number){
    return this.http.get<ResponseFormat<ResponseSimpleUserDto>>(`${environment.apiUrl}/users/${id}`);
  }

  updateUser(register: RequestUpdateUserDto, id: number){
    return this.http.put<ResponseFormat<ResponseSimpleUserDto>>(`${environment.apiUrl}/users/${id}`,register);
  }
}
