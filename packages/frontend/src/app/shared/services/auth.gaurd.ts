import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { SessionState } from '@retail/shared';
import { Observable } from 'rxjs';

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
