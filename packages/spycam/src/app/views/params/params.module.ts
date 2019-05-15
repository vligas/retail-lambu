import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetitorComponent } from './competitor/competitor.component';
import { ParamsRoutingModule } from './params-routing.module';

@NgModule({
  declarations: [CompetitorComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ParamsRoutingModule
  ]
})
export class ParamsModule { }
