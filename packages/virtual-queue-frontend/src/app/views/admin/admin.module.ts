import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnsComponent } from './turns/turns.component';
import { SharedModule } from '@frontend/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from '@frontend/app/shared/components/shared-components.module';
import { SharedPipesModule } from '@retail/shared';

@NgModule({
  declarations: [TurnsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    SharedComponentsModule,
    SharedPipesModule
  ]
})
export class AdminModule { }
