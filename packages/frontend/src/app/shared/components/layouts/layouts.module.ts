import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutSidebarLargeComponent } from './admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { HeaderSidebarLargeComponent } from './admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component';
import { AdminLayoutSidebarCompactComponent } from './admin-layout-sidebar-compact/admin-layout-sidebar-compact.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SearchModule, FooterComponent, CustomizerComponent, SharedPipesModule } from '@retail/shared';
import { SidebarLargeComponent } from './admin-layout-sidebar-large/sidebar-large/sidebar-large.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SidebarCompactComponent } from './admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component';
import { HeaderSidebarCompactComponent } from './admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { FormsModule } from '@angular/forms';
import { MaintenanceLayoutComponent } from './maintenance-layout/maintenance-layout.component';

const components = [
  HeaderSidebarCompactComponent,
  HeaderSidebarLargeComponent,
  SidebarLargeComponent,
  SidebarCompactComponent,
  FooterComponent,
  CustomizerComponent,
  AdminLayoutSidebarLargeComponent,
  AdminLayoutSidebarCompactComponent,
  AuthLayoutComponent,
  BlankLayoutComponent,
  MaintenanceLayoutComponent,
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
