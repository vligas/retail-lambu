import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitorComponent } from '@frontend/app/views/spy/competitor/competitor.component';
import { BranchCompetitorComponent } from '@frontend/app/views/spy/branch-competitor/branch-competitor.component';

const routes: Routes = [
  {
    path: 'competitor',
    pathMatch: 'full',
    component: CompetitorComponent
  },
  {
    path: 'competitor/:idCompetitor',
    pathMatch: 'full',
    component: BranchCompetitorComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpyRoutingModule { }
