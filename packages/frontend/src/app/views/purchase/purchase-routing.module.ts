import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GapComponent } from './gap/gap.component';
import { SaleComponent } from './sale/sale.component';
import { ProductPriceVariationComponent } from './product-price-variation/product-price-variation.component';


const routes: Routes = [
  {
    path: 'gap',
    component: GapComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'product-price-variation',
    component: ProductPriceVariationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
