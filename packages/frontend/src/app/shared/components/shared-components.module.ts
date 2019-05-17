import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLoadingComponent } from '@retail/shared/components/btn-loading/btn-loading.component';
import { FeatherIconComponent } from '@retail/shared/components/feather-icon/feather-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SharedPipesModule } from '@retail/shared/pipes/shared-pipes.module';
import { SearchModule } from '@retail/shared/components/search/search.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutsModule } from './layouts/layouts.module';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { AsideDockComponent } from '@retail/shared/components/aside-dock/aside-dock.component';
import { AsideRightComponent } from '@retail/shared/components/aside-dock/aside-right/aside-right.component';
import { AppRoutingModule } from '@frontend/app/app-routing.module';

const components = [
  BtnLoadingComponent,
  FeatherIconComponent,
  BreadcrumbComponent,
  AsideDockComponent,
  AsideRightComponent
];

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    SharedPipesModule,
    SharedDirectivesModule,
    SearchModule,
    PerfectScrollbarModule,
    NgbModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
