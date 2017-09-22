import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavModule} from './nav/nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	NavModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
