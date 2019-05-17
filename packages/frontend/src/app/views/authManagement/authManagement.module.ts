import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { SharedPipesModule } from '@retail/shared/pipes/shared-pipes.module'
import { AuthManagementRoutingModule } from './authManagement-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterRoleComponent } from './masterRole/masterRole.component';
import { DetailRoleComponent } from './detailRole/detailRole.component';
import { MasterUserComponent } from './masterUser/masterUser.component';
import { DetailUserComponent } from './detailUser/detailUser.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    AuthManagementRoutingModule,
    SharedComponentsModule,
    SharedPipesModule
  ],
  declarations: [
    MasterRoleComponent,
    DetailRoleComponent,
    MasterUserComponent,
    DetailUserComponent
  ]
})
export class AuthManagementModule { }
