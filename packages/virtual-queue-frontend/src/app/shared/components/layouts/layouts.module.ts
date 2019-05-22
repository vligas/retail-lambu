import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AdminLayoutSidebarQueueComponent } from './admin-layout-sidebar-queue/admin-layout-sidebar-queue.component';
import { SidebarLargeComponent } from './admin-layout-sidebar-large/sidebar-large/sidebar-large.component';

import {
  SearchModule,
  FooterComponent,
  CustomizerComponent,
  SharedPipesModule,
  SharedDirectivesModule,
  MaintenanceLayoutComponent,
  BlankLayoutComponent,
  AuthLayoutComponent
} from '@retail/shared';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';


const components = [
  FooterComponent,
  AdminLayoutSidebarQueueComponent,
  CustomizerComponent,
  AuthLayoutComponent,
  BlankLayoutComponent,
  MaintenanceLayoutComponent,
  SidebarLargeComponent
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    PerfectScrollbarModule,
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class LayoutsModule { }
