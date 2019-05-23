import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpErrorResponse,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpResponse
} from '@angular/common/http';
import {
    Observable,
    throwError
} from 'rxjs';
import {
    catchError,
    map
} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Error } from '@retail/shared';
import { ServiceOpts } from '@retail/shared';
@Injectable()
export class ApiFailsInterceptor implements HttpInterceptor {
    constructor(
        public toastrService: ToastrService,
        private options: ServiceOpts
    ) { }
    // tslint:disable-next-line:no-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
            // tslint:disable-next-line:no-any
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {

                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                const errUrl: string = error.url.substring(0, this.options.apiUrl.length);
                if (errUrl === this.options.apiUrl) {
                    let data: Error = { reason: '', status: 0 };

                    data = {
                        reason: error && error.error ? error.message : '',
                        status: error.status
                    };
                    this.toastrService.error(data.status.toString(), data.reason);
                    return throwError(error);
                }
            }));
    }
}