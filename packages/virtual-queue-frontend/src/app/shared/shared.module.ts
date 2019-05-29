import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  SearchModule,
  SharedDirectivesModule,
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
import {
  ApiCurrencyInterceptor,
  ApiFailsInterceptor,
  ApiLocationInterceptor,
  ApiTokensInterceptor
} from './interceptors';
import { SharedComponentsModule } from './components/shared-components.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from '@frontend/environments/environment';
import { TurnState } from './state/turn/turn.state';
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
      BranchOfficeCompetitorState,
      TurnState
    ], { developmentMode: !environment.production }),
    NgxsWebsocketPluginModule.forRoot({
      url: 'ws://localhost:3000/websock'
    }),
    // NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    PerfectScrollbarModule,
    SearchModule,
    ToastrModule.forRoot(),
    NgbModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiFailsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiTokensInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiCurrencyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiLocationInterceptor, multi: true }
  ]
})
export class SharedModule { }