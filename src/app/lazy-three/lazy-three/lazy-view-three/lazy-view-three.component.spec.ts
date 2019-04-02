import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyViewThreeComponent } from './lazy-view-three.component';

describe('LazyViewThreeComponent', () => {
  let component: LazyViewThreeComponent;
  let fixture: ComponentFixture<LazyViewThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyViewThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyViewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
