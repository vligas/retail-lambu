import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnsComponent } from './turns/turns.component';
const routes: Routes = [
    {
        path: 'turns',
        component: TurnsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }