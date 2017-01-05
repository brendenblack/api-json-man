import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { AppComponent }  from './app.component';
import { JsonBuilderComponent } from './json-builder/json-builder.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, JsonBuilderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
