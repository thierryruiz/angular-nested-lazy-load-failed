import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyViewTwoComponent } from './lazy-view-two/lazy-view-two.component';

const routes : Routes = [
  {
    path: '',
    component : LazyViewTwoComponent,
    outlet : 'lazy2here',
    children : [
        {
            path : 'lazy3',
            loadChildren: '../lazy-three/lazy-three.module#LazyThreeModule'
        }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild ( routes )],
  exports: [RouterModule]
} )
export class LazyTwoRoutingModule { }
