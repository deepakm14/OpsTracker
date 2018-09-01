import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstrackerviewComponent } from './opstrackerview.component';

describe('OpstrackerviewComponent', () => {
  let component: OpstrackerviewComponent;
  let fixture: ComponentFixture<OpstrackerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstrackerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstrackerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
