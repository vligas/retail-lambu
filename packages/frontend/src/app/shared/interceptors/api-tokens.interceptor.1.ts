import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from '@retail/shared/services/local-store.service';


@Injectable()
export class ApiTokensInterceptor implements HttpInterceptor {

    constructor(public toastrService: ToastrService, private local: LocalStoreService) { }
    // tslint:disable-next-line:no-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const session = this.local.getItem('session');
        // console.log(session);
        if (session) {
            const jwt = session.token;
            if (!!jwt) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${jwt}`
                    }
                });
            }
        }
        return next.handle(request);
    }

}