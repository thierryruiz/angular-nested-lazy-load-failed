import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyViewOneComponent } from './lazy-view-one/lazy-view-one.component';

const routes : Routes = [
  {
    path: '',
    component : LazyViewOneComponent,
    children : [
        {
            path : 'lazy2',
            loadChildren: '../lazy-two/lazy-two.module#LazyTwoModule'
        }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild ( routes )],
  exports: [RouterModule]
} )
export class LazyOneRoutingModule { }
