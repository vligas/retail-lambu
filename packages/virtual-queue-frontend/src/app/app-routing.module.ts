import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '@retail/shared';
import { AdminLayoutSidebarQueueComponent } from './shared/components/layouts/admin-layout-sidebar-queue/admin-layout-sidebar-queue.component';

const adminRoutes: Routes = [
  {
    path: 'queue',
    loadChildren: './views/queue/queue.module#QueueModule'
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'queue/v1',
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
  {
    path: '',
    component: AdminLayoutSidebarQueueComponent,
    // canActivate: [AuthGaurd],
    children: adminRoutes
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
