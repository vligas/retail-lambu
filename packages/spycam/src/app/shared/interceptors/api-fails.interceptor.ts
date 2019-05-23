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
import { tap, catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {
    ServiceOpts,
    Error
} from '@retail/shared';
@Injectable()
export class ApiFailsInterceptor implements HttpInterceptor {
    constructor(public toastrService: ToastrService, private options: ServiceOpts) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(
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