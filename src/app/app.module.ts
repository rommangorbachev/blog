import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {ScullyLibModule} from "@scullyio/ng-lib";
import {ArticlesModule} from "./articles/articles.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ArticlesModule,
    ScullyLibModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
