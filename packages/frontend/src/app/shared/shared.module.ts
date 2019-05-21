import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchModule } from '@retail/shared';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { SharedDirectivesModule } from '../shared/directives/shared-directives.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiFailsInterceptor } from './interceptors/api-fails.interceptor';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { ApiTokensInterceptor } from './interceptors/api-tokens.interceptor.1';
import { ApiCurrencyInterceptor } from './interceptors/api-currency.interceptor';
import { ApiLocationInterceptor } from './interceptors/api-location.interceptor';
import {
  SharedPipesModule,
  ServiceModule,
  BranchOfficeCompetitorState,
  CompetitorState,
  SaleState,
  BranchOfficeState,
  UserState,
  PriceVariationState,
  RoleState,
  ConfigState,
  ProductState,
  CurrencyState,
  TagState,
  GapState,
  CategoryState,
  DollarPriceState,
  SessionState
} from '@retail/shared';
import { environment } from '@frontend/environments/environment';



@NgModule({
  imports: [
    CommonModule,
    ServiceModule.forRoot({
      apiUrl: environment.apiUrl
    }),
    NgxsModule.forRoot([
      SessionState,
      DollarPriceState,
      CategoryState,
      GapState,
      CurrencyState,
      TagState,
      ProductState,
      ConfigState,
      ProductState,
      RoleState,
      PriceVariationState,
      UserState,
      BranchOfficeState,
      SaleState,
      CompetitorState,
      BranchOfficeCompetitorState
    ]),
    // NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    PerfectScrollbarModule,
    SearchModule,
    ToastrModule.forRoot(),
    NgbModule,
    SharedComponentsModule,
    // SharedDirectivesModule,
    // SharedPipesModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiFailsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiTokensInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiCurrencyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiLocationInterceptor, multi: true }
  ]
})
export class SharedModule { }
