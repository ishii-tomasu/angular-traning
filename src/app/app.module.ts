import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { AppRoutes } from './app.routing';

import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
