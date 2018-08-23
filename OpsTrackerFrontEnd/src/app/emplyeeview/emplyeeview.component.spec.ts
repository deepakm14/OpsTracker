import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeviewComponent } from './emplyeeview.component';

describe('EmplyeeviewComponent', () => {
  let component: EmplyeeviewComponent;
  let fixture: ComponentFixture<EmplyeeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyeeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
