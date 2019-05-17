import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Error } from '@retail/shared/models/error.model';
import { Currency } from '@retail/shared/models/currency.model';
import { Store, Select } from '@ngxs/store';
import { CurrencyState } from '@retail/shared/state/currency/currency.state';



@Injectable()


export class ApiCurrencyInterceptor implements HttpInterceptor {

  @Select(CurrencyState.selectCurrency)
  selectCurrency: Observable<Currency>;

  currency: Currency;

  constructor(public toastrService: ToastrService, private store: Store) {
    this.selectCurrency.subscribe(data => {
      this.currency = data;
    });
  }
  // tslint:disable-next-line:no-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.currency) {
      request = request.clone({
        setHeaders: {
          'X-Currency': this.currency.id.toString()
        }
      });
    }

    return next.handle(request);


  }

}