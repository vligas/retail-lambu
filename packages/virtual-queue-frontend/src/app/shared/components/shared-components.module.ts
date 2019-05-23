import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BtnLoadingComponent,
  FeatherIconComponent,
  SearchModule,
  AsideDockComponent,
  AsideRightComponent,
  SharedPipesModule,
  SharedDirectivesModule,
  BreadcrumbComponent
} from '@retail/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutsModule } from './layouts/layouts.module';

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