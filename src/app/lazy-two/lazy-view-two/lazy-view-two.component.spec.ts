import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyViewTwoComponent } from './lazy-view-two.component';

describe('LazyViewTwoComponent', () => {
  let component: LazyViewTwoComponent;
  let fixture: ComponentFixture<LazyViewTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyViewTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
