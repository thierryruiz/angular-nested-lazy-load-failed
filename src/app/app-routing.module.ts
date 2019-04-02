import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: 'lazy1',
    loadChildren: './lazy-one/lazy-one.module#LazyOneModule'
  }
];

@NgModule( {
  imports: [RouterModule.forRoot ( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
