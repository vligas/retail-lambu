import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LocalStoreService } from '@retail/shared';


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