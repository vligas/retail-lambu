import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

import { SharedPipesModule } from '@retail/shared';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GapComponent } from './gap/gap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaleComponent } from './sale/sale.component';
import { ProductPriceVariationComponent } from './product-price-variation/product-price-variation.component';
import { SharedDirectivesModule } from '../../shared/directives/shared-directives.module';

const components = [
  GapComponent,
  SaleComponent,
  ProductPriceVariationComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    PurchaseRoutingModule,
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule
  ],
  declarations: components
})
export class PurchaseModule { }
