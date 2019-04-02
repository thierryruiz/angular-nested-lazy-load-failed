import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyViewThreeComponent } from './lazy-view-three/lazy-view-three.component';

const routes : Routes = [
  {
    path: '',
    component : LazyViewThreeComponent,
    outlet : 'lazy3here'
  }
];

@NgModule( {
  imports: [RouterModule.forChild ( routes )],
  exports: [RouterModule]
} )
export class LazyThreeRoutingModule { }
