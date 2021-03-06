import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { ResponseFormat } from '../dto/responseFormat.interface';
import { ResponseLoginDto, ResponseRoleDto, RequestUpdateRoleDto, ResponsePermissionDto, RequestCreateRoleDto } from '../dto/auth.dto';
import { ServiceOpts } from './service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Only for demo purpose
  authenticated = false;

  private options = {
    apiUrl: 'jajs'
  };

  constructor(
    private localStore: LocalStoreService,
    private router: Router,
    private http: HttpClient
  ) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = !!this.localStore.getItem('auth-token');
  }

  signin(credentials: { username: string, password: string }) {

    return this.http.post<ResponseFormat<ResponseLoginDto>>(`${this.options.apiUrl}/auth/login`, {
      username: credentials.username,
      password: credentials.password
    });

  }

  signout() {
    this.authenticated = false;
    this.localStore.removeItem('session');
    this.localStore.setItem('auth-token', false);
    this.router.navigateByUrl('/sessions/signin');

    return true;
  }

  getAllRoles() {
    const str = `${this.options.apiUrl}/auth/roles`;
    return this.http.get<ResponseFormat<ResponseRoleDto[]>>(str);
  }

  getRole(id: number) {
    const str = `${this.options.apiUrl}/auth/roles/${id}`;
    return this.http.get<ResponseFormat<ResponseRoleDto>>(str);

  }

  updateRole(id: number, register: RequestUpdateRoleDto) {
    return this.http.put<ResponseFormat<ResponseRoleDto[]>>(`${this.options.apiUrl}/auth/roles/${id}`, register);
  }

  createRole(register: RequestCreateRoleDto) {
    return this.http.post<ResponseFormat<ResponseRoleDto>>(`${this.options.apiUrl}/auth/roles`, register);
  }

  getPermissions() {
    return this.http.get<ResponseFormat<ResponsePermissionDto[]>>(`${this.options.apiUrl}/auth/permissions`);
  }

  deleteRole(id: number) {
    return this.http.delete(`${this.options.apiUrl}/auth/roles/${id}`);
  }
}
