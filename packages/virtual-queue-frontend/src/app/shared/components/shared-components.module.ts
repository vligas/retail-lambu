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
  BtnCornerComponent
} from '@retail/shared';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutsModule } from './layouts/layouts.module';
import { ClockComponent } from './clock/clock.component';
import { WizardComponent } from '@retail/shared/src/components/form-wizard/wizard/wizard.component';
import { WizardStepComponent } from '@retail/shared/src/components/form-wizard/wizard-step/wizard-step.component';
import { CardBoxComponent } from './card-box/card-box.component';

const components = [
  BtnLoadingComponent,
  FeatherIconComponent,
  BreadcrumbComponent,
  AsideDockComponent,
  AsideRightComponent,
  BtnCornerComponent,
  ClockComponent,
  WizardComponent,
  WizardStepComponent,
  CardBoxComponent
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
