import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '@retail/shared';
import { AdminLayoutSidebarQueueComponent } from './shared/components/layouts/admin-layout-sidebar-queue/admin-layout-sidebar-queue.component';
import { AdminLayoutSidebarLargeComponent } from './shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';

const adminRoutes: Routes = [

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
      },
      {
        path: 'personal',
        loadChildren: './views/personal/personal.module#PersonalModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutSidebarQueueComponent,
    // canActivate: [AuthGaurd],
    children: [
      {
        path: 'queue',
        loadChildren: './views/queue/queue.module#QueueModule'
      },
    ]
  },
  {
    path: '',
    component: AdminLayoutSidebarLargeComponent,
    children: [
      {
        path: 'admin',
        loadChildren: './views/admin/admin.module#AdminModule'
      }
    ]
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
