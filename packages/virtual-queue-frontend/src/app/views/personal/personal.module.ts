import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { SelectTurnComponent } from './select-turn/select-turn.component';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { SharedPipesModule } from '@retail/shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TurnComponent } from './turn/turn.component';

@NgModule({
  declarations: [SelectTurnComponent, TurnComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    SharedComponentsModule,
    SharedPipesModule
  ]
})
export class PersonalModule { }
