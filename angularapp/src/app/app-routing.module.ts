import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListteamsComponent } from './listteams/listteams.component';

const routes: Routes = [
  {path : 'ListTeam' ,component :ListteamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
