import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '@retail/shared';
import { AuthGaurd } from './shared/services/auth.gaurd';
import { AdminLayoutSidebarCompactComponent } from '../app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';
import { AdminLayoutSidebarLargeComponent } from '../app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';

const adminRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGaurd],
    loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'authManagement',
    loadChildren: './views/authManagement/authManagement.module#AuthManagementModule'
  },
  {
    path: 'params',
    loadChildren: './views/params/params.module#ParamsModule'
  },
  {
    path: 'purchase',
    loadChildren: './views/purchase/purchase.module#PurchaseModule'
  },
  {
    path: 'products',

    loadChildren: './views/products/products.module#ProductModule'
  },
  {
    path: 'spy',
    loadChildren: './views/spy/spy.module#SpyModule'
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/v1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
