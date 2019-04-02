import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyViewOneComponent } from './lazy-view-one/lazy-view-one.component';
import { LazyOneRoutingModule } from './lazy-one-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ],
  declarations: [LazyViewOneComponent]
})
export class LazyOneModule { }
