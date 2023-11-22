import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { FormsModule } from '@angular/forms';
import { AddteamComponent } from './addteam/addteam.component';
import { EditplayerComponent } from './editplayer/editplayer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayerComponent,
    MenuComponent,
    TeamComponent,
    AddplayerComponent,
    AddteamComponent,
    EditplayerComponent
    
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
