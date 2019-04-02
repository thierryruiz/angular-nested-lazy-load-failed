import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyViewTwoComponent } from './lazy-view-two/lazy-view-two.component';
import { LazyTwoRoutingModule } from './lazy-two-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ],
  declarations: [LazyViewTwoComponent]
})
export class LazyTwoModule { }
