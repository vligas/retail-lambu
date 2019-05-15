import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Currency } from '@frontend/app/shared/models/currency.model';
import { Store, Select } from '@ngxs/store';
import { BranchOfficeState } from '../state/branchOffice/branchOffice.state';
import { BranchOffice } from '../models/branchOffice.model';



@Injectable()
export class ApiLocationInterceptor implements HttpInterceptor {
 
  @Select(BranchOfficeState.getSelectedBranchOffice)
  branchOffice$: Observable<BranchOffice>;

  branchOffice: BranchOffice;

  constructor(public toastrService: ToastrService, private store: Store) {
    this.branchOffice$.subscribe(data => {
      this.branchOffice = data;
    });
  }
  // tslint:disable-next-line:no-any
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.branchOffice){
          console.log(this.branchOffice);
          request = request.clone({
            setHeaders: {
                'X-Location': this.branchOffice.C_codigo
            }
        });
      }
    
      return next.handle(request); 
    }
    
}