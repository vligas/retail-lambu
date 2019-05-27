import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectTurnComponent } from './select-turn/select-turn.component';
import { TurnComponent } from './turn/turn.component';

const routes: Routes = [{
  path: 'select-turn',
  component: SelectTurnComponent
}, {
  path: 'turn/:id',
  component: TurnComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
