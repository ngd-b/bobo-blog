import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavModule} from './nav/nav.module';
import {ContentModule} from './content/content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	NavModule,
  	ContentModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
