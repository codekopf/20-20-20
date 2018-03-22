import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TwtwtwComponent } from './twtwtw/twtwtw.component';

@NgModule({
  declarations: [
    AppComponent,
    TwtwtwComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
