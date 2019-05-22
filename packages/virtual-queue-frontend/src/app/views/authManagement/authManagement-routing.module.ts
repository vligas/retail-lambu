import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterRoleComponent } from './masterRole/masterRole.component';
import { DetailRoleComponent } from './detailRole/detailRole.component';
import { MasterUserComponent } from './masterUser/masterUser.component';
import { DetailUserComponent } from './detailUser/detailUser.component';

const routes: Routes = [
  {
    path: 'role-control',
    component: MasterRoleComponent
  },
  {
    path: 'detail-role/:idRole',
    component: DetailRoleComponent
  },
  {
    path: 'user-control',
    component: MasterUserComponent
  },
  {
    path: 'detail-user/:idUser',
    component: DetailUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthManagementRoutingModule { }
