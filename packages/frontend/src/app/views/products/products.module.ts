import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

import { SharedPipesModule } from '@retail/shared'
import { PurchaseRoutingModule } from './products-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterProductComponent } from './masterProduct/masterProduct.component';
import { DetailProductComponent } from './detailProduct/detailProduct.component';
import { TagInputModule } from 'ngx-chips';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgxEchartsModule,
    NgbModule,
    PurchaseRoutingModule,
    SharedComponentsModule,
    SharedPipesModule,
    TagInputModule
  ],
  declarations: [
    MasterProductComponent,
    DetailProductComponent
  ]
})
export class ProductModule { }
