import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue/queue.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { SharedPipesModule } from '@retail/shared'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QueueRoutingModule } from './queue-routing.module';
import { SharedModule } from '@frontend/app/shared/shared.module';
import { PublicPipe } from '@frontend/app/shared/pipes/public.pipe';


@NgModule({
  declarations: [QueueComponent, PublicPipe],
  imports: [
    CommonModule,
    FormsModule,
    QueueRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    SharedComponentsModule,
    SharedPipesModule
  ]
})
export class QueueModule { }
