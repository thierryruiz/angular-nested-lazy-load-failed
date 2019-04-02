import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyViewOneComponent } from './lazy-view-one.component';

describe('LazyViewOneComponent', () => {
  let component: LazyViewOneComponent;
  let fixture: ComponentFixture<LazyViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
