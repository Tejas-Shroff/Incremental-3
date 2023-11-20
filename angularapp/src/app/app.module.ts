import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListteamsComponent } from './listteams/listteams.component';
import { FindteamComponent } from './findteam/findteam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListteamsComponent,
    FindteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
