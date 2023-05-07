import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TeamsComponent } from './teams/teams.component';
import { IplComponent } from './ipl/ipl.component';
import { MumbaiindiansComponent } from './mumbaiindians/mumbaiindians.component';



@NgModule({
  declarations: [AppComponent, TeamsComponent, IplComponent, MumbaiindiansComponent],
  imports: [ BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
