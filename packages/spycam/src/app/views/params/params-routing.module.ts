import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitorComponent } from './competitor/competitor.component';

const routes: Routes = [
    {
        path: 'competitor',
        component: CompetitorComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ParamsRoutingModule { }