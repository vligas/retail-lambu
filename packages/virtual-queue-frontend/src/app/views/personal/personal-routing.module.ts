import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectTurnComponent } from './select-turn/select-turn.component';

const routes: Routes = [{
  path: 'select-turn',
  component: SelectTurnComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
