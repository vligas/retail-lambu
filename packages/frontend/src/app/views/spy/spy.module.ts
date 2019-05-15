import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpyRoutingModule } from './spy-routing.module';
import { CompetitorComponent } from './competitor/competitor.component';
import { BranchCompetitorComponent } from './branch-competitor/branch-competitor.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '@frontend/app/shared/components/shared-components.module';


@NgModule({
  declarations: [
    CompetitorComponent, 
    BranchCompetitorComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    SpyRoutingModule,
    SharedComponentsModule,
  ]
})
export class SpyModule { }
