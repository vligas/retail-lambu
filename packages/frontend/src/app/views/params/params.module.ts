import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

import { ParamsRoutingModule } from './params-routing.module';
import { DolarPriceComponent } from './dolar-price/dolar-price.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CurrencyComponent } from './currency/currency.component';
import { LayoutsModule } from '@frontend/app/shared/components/layouts/layouts.module';
import { HistoricComponent } from './historic/historic.component';
import { TagComponent } from './tag/tag.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [
    CommonModule,
    ParamsRoutingModule,
    SharedComponentsModule,
    LayoutsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DolarPriceComponent,
    CategoryComponent,
    CurrencyComponent,
    TagComponent,
    HistoricComponent,
    ConfigComponent
  ],

})
export class ParamsModule { }
