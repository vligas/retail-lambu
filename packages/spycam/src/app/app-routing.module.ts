import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '@retail/shared';

const routes: Routes = [
  {
    path: 'business',
    loadChildren: './views/business/business.module#BusinessPageModule'
  },
  {
    path: 'params',
    loadChildren: './views/params/params.module#ParamsModule'
  },
  {
    path: 'tabs',
    loadChildren: './views/tabs/tabs.module#TabsPageModule'
  },
  {
    path: '',
    redirectTo: 'sessions/signin',
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
