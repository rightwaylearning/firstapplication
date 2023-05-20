import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TeamsComponent } from './teams/teams.component';
import { IplComponent } from './ipl/ipl.component';
import { MumbaiindiansComponent } from './mumbaiindians/mumbaiindians.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';



@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    IplComponent,
    MumbaiindiansComponent,
    IfelseComponent,
    SwitchCaseComponent,
    Example1Component,
    Example2Component
  ],
  imports: [ BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
