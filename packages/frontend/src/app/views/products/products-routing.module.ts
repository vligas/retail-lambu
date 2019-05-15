import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterProductComponent } from './masterProduct/masterProduct.component';
import { DetailProductComponent } from './detailProduct/detailProduct.component';

const routes: Routes = [
  {
    path: 'master-product',
    pathMatch: 'full',
    component: MasterProductComponent
  },
  {
    path: 'detail-product/:codProduct',
    pathMatch: 'full',
    component: DetailProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
