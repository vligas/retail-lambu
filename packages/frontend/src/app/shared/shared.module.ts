import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchModule } from '@retail/shared/components/search/search.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { SharedDirectivesModule } from '../shared/directives/shared-directives.module';
import { SharedPipesModule } from '@retail/shared/pipes/shared-pipes.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { SessionState } from './state/session/session.state';
import { DollarPriceState } from './state/dollarPrice/dollarPrice.state';
import { CategoryState } from './state/category/category.state';
import { GapState } from './state/gap/gap.state';
import { TagState } from './state/tag/tag.state';
import { CurrencyState } from './state/currency/currency.state';
import { ProductState } from './state/product/product.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiFailsInterceptor } from './interceptors/api-fails.interceptor';
import { ConfigState } from './state/config/config.state';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { RoleState } from './state/roleControl/role.state';
import { PriceVariationState } from './state/price-variation/price-variation.state';
import { UserState } from './state/userControl/user.state';
import { ApiTokensInterceptor } from './interceptors/api-tokens.interceptor.1';
import { BranchOfficeState } from './state/branchOffice/branchOffice.state';
import { ApiCurrencyInterceptor } from './interceptors/api-currency.interceptor';
import { SaleState } from './state/sale/sale.state';
import { CompetitorState } from './state/competitor/competitor.state';
import { BranchOfficeCompetitorState } from './state/branchOfficeCompetitor/branchOfficeCompetitor.state';
import { ApiLocationInterceptor } from './interceptors/api-location.interceptor';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  imports: [
    CommonModule,
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
