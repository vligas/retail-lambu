import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Store, Select } from '@ngxs/store';
import { SessionState } from '../state/session/session.state';
import { Observable } from 'rxjs';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  @Select(SessionState.isLoggedIn) active$: Observable<boolean>;
  active: boolean;

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.active$.subscribe(val => this.active = val);
  }

  canActivate() {
    if (this.active) {
      return true;
    } else {
      this.router.navigateByUrl('/sessions/signin');
    }
  }
}
