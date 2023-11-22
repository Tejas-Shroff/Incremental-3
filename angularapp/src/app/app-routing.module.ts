import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { Component } from '@angular/core';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { AddteamComponent } from './addteam/addteam.component';


const routes: Routes = [
  {path : 'showPlayers' , component:PlayerComponent},
  {path : 'showTeams', component:TeamComponent},
  {path : 'AddPLayers', component:AddplayerComponent},
  {path : 'AddTeams' ,component: AddteamComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
