import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { HuderumModule } from './pages/huderum/huderum.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HuderumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
