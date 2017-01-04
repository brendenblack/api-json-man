import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonBuilderComponent }   from './json-builder/json-builder.component';

const routes: Routes = [
  { path: '', redirectTo: '/builder', pathMatch: 'full' },
  { path: 'builder',  component: JsonBuilderComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}