import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DolarPriceComponent } from './dolar-price/dolar-price.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { CurrencyComponent } from './currency/currency.component';
import { HistoricComponent } from './historic/historic.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: 'currencies',
    component: CurrencyComponent,
  },
  {
    path: 'currencies/:id/historic',
    component: HistoricComponent
  },
  {
    path: 'dolar-price',
    component: DolarPriceComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamsRoutingModule { }
