import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyViewThreeComponent } from './lazy-view-three/lazy-view-three.component';
import { LazyThreeRoutingModule } from './lazy-three-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LazyThreeRoutingModule
  ],
  declarations: [LazyViewThreeComponent]
})
export class LazyThreeModule { }
